import { SchemaRegistry, SchemaType } from '@kafkajs/confluent-schema-registry'
import * as fs from 'fs'
import { promisify } from 'util'
import avro from 'avsc'
import { kafka, topic } from '../../kafka_provider'
/*
npx tsx --env-file=.env src/step5_avro/sol/produce_avro.ts
npx tsx --env-file=.env.local src/step5_avro/sol/produce_avro.ts

*/
const registry = new SchemaRegistry({host: process.env.SCHEMA_REGISTRY!})
const producer = kafka.producer();

const run = async () => {
  const readFileAsync = promisify(fs.readFile)
  const avroSchema = await readFileAsync(__dirname+'/../random.avsc', {encoding: 'utf-8'})

  const {id} = await registry.register({
    type: SchemaType.AVRO,
    schema: avroSchema,
  })

  // Encode using the uploaded schema
  const payload = {fullName: 'John Doe'}
  const encodedPayload = await registry.encode(id, payload)
  console.log('encodedPayload:', encodedPayload, encodedPayload.length)

  const rawAvroPayload = avro.Type.forSchema(JSON.parse(avroSchema)).toBuffer(payload)
  console.log('pureAvro:',rawAvroPayload, rawAvroPayload.length)

  // Decode the payload
  const decodedPayload = await registry.decode(encodedPayload)
  console.log('decodedPayload', decodedPayload, JSON.stringify(decodedPayload).length)

  await producer.connect();

  await producer.send({
    topic: 'random-avro',
    messages: [
      {value: encodedPayload},
    ],
  });

  console.log('Message sent successfully');
  await producer.disconnect();
};

run().catch(e => console.error('[example/producer] e.message', e));




