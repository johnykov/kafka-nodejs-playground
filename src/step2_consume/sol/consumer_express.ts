import { kafka, topic } from '../../kafka_provider'
import { ConsumerEvents, EachMessagePayload } from 'kafkajs'
import express from 'express'
import * as routes from '../../step8_kafka_express/components/routes'

/*
npm start src/step2_consume/sol/consumer_express.ts
*/

const consumer = kafka.consumer({groupId: 'my-test-consumer'});

async function initConsumer() {
  await consumer.connect()
  console.log('consumer connect')
  consumer.on('consumer.heartbeat', (ev)=> console.log(new Date(), ev))
}

const run = async () => {
  await consumer.subscribe({topic, fromBeginning: true})
  await consumer.run({
    eachMessage: async ({topic, partition, message}: EachMessagePayload) => {
      console.log({
        value: message.value?.toString(),
      })
    },
  })
};

initConsumer().then(()=> run()).catch(e => console.error('[example/consumer] e.message', e));

// express below
const shutDown = async () => {
  console.debug('SIGTERM signal received: closing HTTP server')
  await consumer.disconnect()
  server.close(() => console.debug('HTTP server closed'))
}
process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);

const app = express()
app.use(express.json());
app.use(express.urlencoded({
  extended: false,
}));

const server = app.listen(9123, () => {
  console.log(`Server is listening on ${9123}`);
});


