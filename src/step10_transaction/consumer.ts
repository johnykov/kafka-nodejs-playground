import { kafka } from '../kafka_provider'
import { EachMessagePayload } from 'kafkajs'
/*
npm start src/step4_transaction/sol/consumer.ts
*/

const consumer = kafka.consumer({groupId: 'transactional-consumer'});
const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic:'<CHANGEME>', fromBeginning: true }) //TODO:
  await consumer.run({
    eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
      console.log({
        key: message.key?.toString(),
        value: message.value?.toString(),
      })
    },
  })
};

async function gracefullyClose() {
  await consumer.disconnect()
}
process.on('SIGINT', gracefullyClose)
process.on('SIGTERM', gracefullyClose)
run().catch(e => console.error('[example/consumer] e.message', e));
