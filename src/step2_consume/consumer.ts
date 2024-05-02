import { kafka, topic } from '../kafka_provider'
import { EachMessagePayload } from 'kafkajs'
/*
npx tsx --env-file=.env src/step2_consume/consumer.ts
npx tsx --env-file=.env.local src/step2_consume/consumer.ts

kafka-consumer-groups --bootstrap-server localhost:29092 --list
kafka-consumer-groups --bootstrap-server localhost:29092 --group my-test-consumer --describe
kafka-consumer-groups --bootstrap-server localhost:29092 --topic submissions --group calculator-group --reset-offsets --to-earliest --execute
*/

const consumer = kafka.consumer({groupId: 'my-test-consumer'});
const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: true })
  await consumer.run({
    eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
      console.log({
        value: message.value?.toString(),
      })
    },
  })
  // TODO: figure out what's wrong
  await consumer.disconnect();
};

run().catch(e => console.error('[example/consumer] e.message', e));
