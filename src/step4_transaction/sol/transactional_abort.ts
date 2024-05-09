import { kafka, topic } from '../../kafka_provider'
import { EachMessagePayload } from 'kafkajs'
import { topicName } from '../topic'
import AsyncLock from 'async-lock'
/*
npm start src/step4_transaction/sol/transactional_abort.ts
*/
const groupId = 'my-transactional-abort';
const consumer = kafka.consumer({groupId, readUncommitted: false});
const producer = kafka.producer({
  transactionalId: 'my-transactional-producer',
  maxInFlightRequests: 1,
  idempotent: true,
});
process.on('SIGINT', gracefullyClose)
process.on('SIGTERM', gracefullyClose)
const delay = (ms:number) => new Promise(res => setTimeout(res, ms));

const run = async () => {
  await consumer.connect();
  await producer.connect();
  await consumer.subscribe({topic, fromBeginning: true})
  await consumer.run({
    autoCommit: false,
    eachMessage: async ({topic, partition, message}: EachMessagePayload) => {
      const lock = new AsyncLock();
      const transaction = await producer.transaction()
      try {
        console.log(`tx processing offset:${message.offset} partition: ${partition}`);
        await transaction.send({topic: topicName, messages: [message]})
        await transaction.sendOffsets({
          consumerGroupId: groupId,
          topics: [{topic, partitions: [{partition, offset: message.offset}]}],
        })
        console.log('tx aborting');
        await transaction.abort()
        await delay(50)
        // await transaction.commit()
      } catch (e) {
        console.log(e)
      }
    },
  })
};

async function gracefullyClose() {
  await producer.disconnect()
  await consumer.disconnect()
}

run().catch(e => console.error('[example/consumer] e.message', e));
