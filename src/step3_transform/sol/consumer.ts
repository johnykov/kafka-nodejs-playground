import { kafka, topic } from '../../kafka_provider'
import { ConsumerEvents, EachMessagePayload } from 'kafkajs'
/*
npm start src/step3_transform/sol/consumer.ts
*/

const consumer = kafka.consumer({groupId: 'transformed-consumer'});
const run = async () => {
  await consumer.connect();
  process.on('SIGINT', gracefullyClose)
  process.on('SIGTERM', gracefullyClose)
  await consumer.subscribe({ topic:'transformed', fromBeginning: true })
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
