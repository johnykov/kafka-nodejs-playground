import { kafka, topic } from '../kafka_provider'
import { createRandomUser } from './domain'
/*
npm start src/step3_transform/continuous_producer.ts
*/

const producer = kafka.producer();

async function publishMsg(value: string) {
  const recordMeta = await producer.send({
    topic: topic,
    messages: [
      {value},
    ],
  });
  console.log(Date.now(), recordMeta);
}

const run = async () => {
  await producer.connect();
  setInterval(() => {
    const payload = JSON.stringify(createRandomUser())
    publishMsg(payload)},1000)
};

run().catch(e => console.error('[example/producer] e.message', e));
