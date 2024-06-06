import { kafka, topic } from '../kafka_provider'
import { EachMessagePayload } from 'kafkajs'
/*
npm start src/step4_transaction/transactional.ts
*/

//NOTICE, double check
//The default value of isolation.level is read_committed. look node_modules/kafkajs/src/index.js:152
const consumer = kafka.consumer({groupId: 'my-transactional', readUncommitted: false});
// TODO 1: uzupełnij specjalne ustawienia producenta
const producer = kafka.producer({});

process.on('SIGINT', gracefullyClose)
process.on('SIGTERM', gracefullyClose)

const run = async () => {
  await producer.connect();
  await consumer.connect();
  await consumer.subscribe({topic, fromBeginning: true})
  await consumer.run({
    autoCommit: true, //TODO 2: przestaw flagę
    eachMessage: async ({topic, partition, message}: EachMessagePayload) => {
    // TODO 3: stwórz obiekt transaction
    },
  })


};

async function gracefullyClose() {
  await producer.disconnect()
  await consumer.disconnect()
}

run().catch(e => console.error('[example/consumer] e.message', e));
