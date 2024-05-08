import { kafka } from '../../kafka_provider'
import { EachMessagePayload } from 'kafkajs'
import { topicName } from '../topic'
/*
npm start src/step4_transaction/sol/consumer.ts
*/
const consumer = kafka.consumer({groupId: 'transactional-consumer'});
const run = async () => {
  await consumer.connect();
  process.on('SIGINT', gracefullyClose)
  process.on('SIGTERM', gracefullyClose)
  await consumer.subscribe({ topic:topicName, fromBeginning: true })
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

run().catch(e => console.error('[example/consumer] e.message', e));
