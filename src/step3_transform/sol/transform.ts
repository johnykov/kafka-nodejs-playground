import { kafka, topic } from '../../kafka_provider'
import { EachMessagePayload } from 'kafkajs'
/*
npm start src/step3_transform/sol/transform.ts
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
      const payload = message.value!.toString()
      const recordMeta = await producer.send({
        topic: 'transformed',
        messages: [
          {key: JSON.parse(payload).subscriptionTier, value: payload},
        ],
      });
      console.log(recordMeta)
    },
  })

};

async function gracefullyClose() {
  console.log('graceful shutdown')
  await producer.disconnect()
  await consumer.disconnect()
}

run().catch(e => console.error('[example/consumer] e.message', e));
