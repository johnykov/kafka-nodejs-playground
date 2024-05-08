import { kafka, topic } from '../kafka_provider'
import { createRandomUser } from './domain'
import express from 'express'
/*
npm start src/step3_transform/continuous_producer_express.ts
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


const app = express()

const server = app.listen(9123, () => {
  console.log(`Server is listening on ${9123}`);
});

const shutDown = () => {
  console.debug('SIGTERM signal received: closing HTTP server')
  producer.disconnect()
  server.close(() => console.debug('HTTP server closed'))
}
process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);
