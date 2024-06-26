import { SchemaRegistry, SchemaType } from '@kafkajs/confluent-schema-registry'
import { kafka, schemaRegistry } from '../kafka_provider'
import { EachMessagePayload } from 'kafkajs'
/*
npm start src/step6_avro_idl/sol/consume_avro.ts
*/
// HINT
const registry = new SchemaRegistry({host: schemaRegistry})
const consumer = kafka.consumer({groupId: 'job-avro-consumer'});
const run = async () => {
  await consumer.connect();
  await consumer.subscribe({topic: 'job-avro', fromBeginning: true})
  await consumer.run({
    eachMessage: async ({topic, partition, message}: EachMessagePayload) => {
      // FIXME:
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

process.on('SIGINT', gracefullyClose)
process.on('SIGTERM', gracefullyClose)

run().catch(e => console.error('[example/consumer] e.message', e));
