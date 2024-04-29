import { kafka, topic } from '../../kafka_provider'
import { ConsumerEvents, EachMessagePayload } from 'kafkajs'
/*
npx tsx --env-file=.env src/step3_transform/sol/consumer.ts
npx tsx --env-file=.env.local src/step4_transaction/sol/consumer.ts
*/

const consumer = kafka.consumer({groupId: 'transactional-consumer'});
const run = async () => {
  await consumer.connect();
  process.on('SIGINT', gracefullyClose)
  process.on('SIGTERM', gracefullyClose)
  await consumer.subscribe({ topic:'transactional', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
      console.log({
        key: message.key?.toString(),
        value: message.value?.toString(),
      })
    },
  })

};

async function gracefullyClose() {
  await consumer.disconnect()
}

run().catch(e => console.error('[example/consumer] e.message', e));
