import { kafka } from '../kafka_provider'
/*
npm start src/step1_produce_create_topic/producer.ts
*/

const topic = 'polish.hellos'

const producer = kafka.producer();
const run = async () => {
  await producer.connect();

  await producer.send({
    topic: topic,
    messages: [
      {value: `Hello Kafka! ${Date.now()}`},
    ],
  });

  console.log('Message sent successfully');
  await producer.disconnect();
};

run().catch(e => console.error('[step1/producer] e.message', e));
