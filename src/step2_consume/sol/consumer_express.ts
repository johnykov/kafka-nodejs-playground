import { kafka } from '../../kafka_provider'
import { EachMessagePayload } from 'kafkajs'
import express from 'express'

/*
npm start src/step2_consume/sol/consumer_express.ts
*/

const topic = 'polish.hellos'

const consumer = kafka.consumer({groupId: 'my-test-consumer'});

const run = async () => {
  await consumer.connect()
  await consumer.subscribe({topic, fromBeginning: true})
  await consumer.run({
    eachMessage: async ({topic, partition, message}: EachMessagePayload) => {
      console.log({
        value: message.value?.toString(),
      })
    },
  })
};

run().catch(e => console.error('[example/consumer] e.message', e));

const app = express()
app.use(express.json());
app.use(express.urlencoded({
  extended: false,
}));

const server = app.listen(9123, () => {
  console.log(`Server is listening on ${9123}`);
});


