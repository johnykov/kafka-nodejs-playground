// https://kafkajs.github.io/confluent-schema-registry/docs/advanced-usage

/*
npx tsx --env-file=.env.local src/step5_avro/read_schema.ts
* */

import { avdlToAVSCAsync, SchemaRegistry, SchemaType } from '@kafkajs/confluent-schema-registry'
const registry = new SchemaRegistry({host: process.env.SCHEMA_REGISTRY!})
import avro from 'avsc'
const run = async () => {
  const subject = 'examples.RandomTest'
  // TODO:

};

run().catch(e => console.error('[example/producer] e.message', e));
