import { kafka, topic } from '../kafka_provider'
import { EachMessagePayload } from 'kafkajs'
/*
npx tsx --env-file=.env src/step3_transform/transform.ts
npx tsx --env-file=.env.local src/step3_transform/transform.ts

*/

const consumer = kafka.consumer({groupId: 'my-transformer'});
const producer = kafka.producer()
const run = async () => {
  await consumer.connect();
  await producer.connect();
  process.on('SIGINT', gracefullyClose)
  process.on('SIGTERM', gracefullyClose)
  await consumer.subscribe({topic, fromBeginning: true})
  await consumer.run({
    eachMessage: async ({topic, partition, message}: EachMessagePayload) => {

      await producer.send({
        topic: '<CHANGE_ME>', //TODO
        messages: [
        // TODO: IMPLEMENT_ME
        ],
      });
    },
  })

};

async function gracefullyClose() {
  await producer.disconnect()
  await consumer.disconnect()
}

run().catch(e => console.error('[example/consumer] e.message', e));
