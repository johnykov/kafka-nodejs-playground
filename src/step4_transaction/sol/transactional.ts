import { kafka, topic } from '../../kafka_provider'
import { EachMessagePayload } from 'kafkajs'
import { topicName } from '../topic'
/*
npm start src/step4_transaction/sol/transactional.ts
*/
const groupId = 'my-transactional';
const consumer = kafka.consumer({groupId, readUncommitted: false});
const producer = kafka.producer({
  transactionalId: 'my-transactional-producer',
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
