import { kafka, topic } from '../kafka_provider'
import { EachMessagePayload } from 'kafkajs'
/*
npx tsx --env-file=.env src/step2_consume/consumer.ts
npx tsx --env-file=.env.local src/step2_consume/consumer.ts

*/

const consumer = kafka.consumer({groupId: 'my-transformer'});
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

  await consumer.disconnect();
};

run().catch(e => console.error('[example/consumer] e.message', e));
