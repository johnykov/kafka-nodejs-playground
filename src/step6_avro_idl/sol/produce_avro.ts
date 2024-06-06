import { SchemaRegistry, SchemaType } from '@kafkajs/confluent-schema-registry'
import * as fs from 'fs'
import { promisify } from 'util'
import { kafka, schemaRegistry } from '../../kafka_provider'
import { PlJan } from '../generated'
import { faker } from '@faker-js/faker/locale/pl'
/*
npm start src/step6_avro_idl/sol/produce_avro.ts
*/
const registry = new SchemaRegistry({host: schemaRegistry})
const producer = kafka.producer();

const run = async () => {
  const readFileAsync = promisify(fs.readFile)
  // or generate schema in-flight from IDL
  const avroSchema = await readFileAsync(__dirname+'/../job-schema.avsc', {encoding: 'utf-8'})

  const {id} = await registry.register({
    type: SchemaType.AVRO,
    schema: avroSchema,
  })

  // Encode using the uploaded schema
  const payload: PlJan.Job = {duration: 123, jobid: faker.string.nanoid(), submitDate: Date.now()}
  const encodedPayload = await registry.encode(id, payload)
  await producer.connect();
  await producer.send({
    topic: 'job-avro',
    messages: [
      {value: encodedPayload},
    ],
  });
  console.log('Message sent successfully', payload);
  await producer.disconnect();
};

run().catch(e => console.error('[example/producer] e.message', e));




