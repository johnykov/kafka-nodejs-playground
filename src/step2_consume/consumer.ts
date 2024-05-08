import { kafka, topic } from '../kafka_provider'
import { EachMessagePayload } from 'kafkajs'
/*
npm start src/step2_consume/consumer.ts
*/

const consumer = kafka.consumer({groupId: 'my-test-consumer'});
const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: true })
  await consumer.run({
    eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
      console.log({
        value: message.value?.toString(),
      })
    },
  })
  // TODO: figure out what's wrong, why quit so early
  await consumer.disconnect();
};

run().catch(e => console.error('[example/consumer] e.message', e));
