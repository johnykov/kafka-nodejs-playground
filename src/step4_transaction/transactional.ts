import { kafka, topic } from '../kafka_provider'
import { EachMessagePayload } from 'kafkajs'
/*
npx tsx --env-file=.env src/step4_transaction/transactional.ts
npx tsx --env-file=.env.local src/step4_transaction/transactional.ts

*/

//NOTICE
const consumer = kafka.consumer({groupId: 'my-transactional', readUncommitted: false});
// NOTICE
const producer = kafka.producer({
  transactionalId: 'my-transactional-producer',
  maxInFlightRequests: 1,
  idempotent: true
});

const run = async () => {
  await consumer.connect();
  await producer.connect();
  process.on('SIGINT', gracefullyClose)
  process.on('SIGTERM', gracefullyClose)

  await consumer.subscribe({topic, fromBeginning: true})
  await consumer.run({
    eachMessage: async ({topic, partition, message}: EachMessagePayload) => {
      const transaction = await producer.transaction()
      // console.log('read', message)
      try {
        await transaction.send({topic: 'transactional', messages: [message]})
        await transaction
          .sendOffsets({
            consumerGroupId: 'test-send-offset-group',
            topics: [{
              topic,
              partitions: [{
                partition,
                offset: message.offset,
              }]
            }]
          })
        await transaction.commit()
        console.log('commit')
      } catch (e) {
        await transaction.abort()
      }

    },
  })


};

async function gracefullyClose() {
  await producer.disconnect()
  await consumer.disconnect()
}

run().catch(e => console.error('[example/consumer] e.message', e));
