import { kafka, topic } from '../../kafka_provider'
import { EachMessagePayload } from 'kafkajs'
/*
npm start src/step3_transform/sol/transform.ts
kafka-topics --create --bootstrap-server localhost:29092 \
  --partitions 3 --replication-factor 1 \
  --topic transformed1
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

      const recordMeta= await producer.send({
        topic: 'transformed',
        messages: [
          {key: '<CHANGE_ME>', value: message.value?.toString()!},
        ],
      });
      console.log(recordMeta)
    },
  })

};

async function gracefullyClose() {
  await producer.disconnect()
  await consumer.disconnect()
}

run().catch(e => console.error('[example/consumer] e.message', e));
