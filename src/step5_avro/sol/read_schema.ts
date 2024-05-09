// https://kafkajs.github.io/confluent-schema-registry/docs/advanced-usage

/*
npm start src/step5_avro/sol/read_schema.ts
* */

import { SchemaRegistry } from '@kafkajs/confluent-schema-registry'
import { schemaRegistry } from '../../kafka_provider'
const registry = new SchemaRegistry({host: schemaRegistry})

const run = async () => {
  const subject = 'examples.RandomTest'
  const id = await registry.getLatestSchemaId(subject)
  console.log(id)
  console.log(await registry.getSchema(id))
};

run().catch(e => console.error('[example/producer] e.message', e));
