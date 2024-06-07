import { kafka, topic } from '../../kafka_provider'
import { EachMessagePayload } from 'kafkajs'
import { topicName } from '../topic'
import { delay } from '../delay'
/*
npm start src/step10_transaction/sol/transactional.ts
*/
const groupId = 'my-transactional';
const consumer = kafka.consumer({groupId, readUncommitted: false});
const producer = kafka.producer({
  transactionalId: 'my-transactional-producer', //unique per producer instance
  maxInFlightRequests: 1,
  idempotent: true,
});
process.on('SIGINT', gracefullyClose)
process.on('SIGTERM', gracefullyClose)

const run = async () => {
  await consumer.connect();
  await producer.connect();
  await consumer.subscribe({topic, fromBeginning: true})
  await consumer.run({
    autoCommit: false,
    eachMessage: async ({topic, partition, message}: EachMessagePayload) => {
      const transaction = await producer.transaction()
      try {
        await transaction.send({topic: topicName, messages: [message]})
        await transaction.sendOffsets({
          consumerGroupId: groupId,
          topics: [{topic, partitions: [{partition, offset: message.offset}]}],
        })
        await transaction.commit()
        console.log(`tx commit partition: ${partition} offset:`, message.offset)
        await delay(10)
      } catch (e) {
        console.log(e)
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
