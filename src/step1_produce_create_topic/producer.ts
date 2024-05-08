import { kafka, topic } from '../kafka_provider'
/*
npm start src/step1_produce_create_topic/producer.ts
*/

const producer = kafka.producer();
const run = async () => {
  await producer.connect();


  await producer.send({
    topic: topic,
    messages: [
      {value: 'Hello Kafka!'},
    ],
  });

  console.log('Message sent successfully');
  await producer.disconnect();
};

run().catch(e => console.error('[example/producer] e.message', e));
