import { SchemaRegistry, SchemaType } from '@kafkajs/confluent-schema-registry'
import { kafka, schemaRegistry } from '../../kafka_provider'
import { EachMessagePayload } from 'kafkajs'
import { promisify } from 'util'
import fs from 'fs'
import avro from 'avsc'
/*
npm start src/step5_avro/sol/consume_avro.ts
*/
// HINT
const registry = new SchemaRegistry({host: schemaRegistry})
const consumer = kafka.consumer({groupId: 'random-avro-consumer'});
const run = async () => {

  await consumer.connect();
  await consumer.subscribe({topic: 'random-avro', fromBeginning: true})
  await consumer.run({
    eachMessage: async ({topic, partition, message}: EachMessagePayload) => {
      // FIXME:
      console.log({
        key: message.key?.toString(),
        value: await registry.decode(message.value!),
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
