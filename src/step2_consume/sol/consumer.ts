import { kafka, topic } from '../../kafka_provider'
import { ConsumerEvents, EachMessagePayload } from 'kafkajs'
/*
npm start src/step2_consume/sol/consumer.ts
*/

const consumer = kafka.consumer({groupId: 'my-test-consumer'});
const run = async () => {
  await consumer.connect();
  process.on('SIGINT', gracefullyClose)
  process.on('SIGTERM', gracefullyClose)
  await consumer.subscribe({ topic, fromBeginning: true })
  await consumer.run({
    eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
      console.log({
        value: message.value?.toString(),
      })
    },
  })

  consumer.on('consumer.heartbeat', (ev)=> console.log(new Date(), ev))
};

async function gracefullyClose() {
  await consumer.disconnect()
}

run().catch(e => console.error('[example/consumer] e.message', e));
