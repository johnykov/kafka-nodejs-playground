import { SchemaRegistry, SchemaType } from '@kafkajs/confluent-schema-registry'
import * as fs from 'fs'
import { promisify } from 'util'
import { schemaRegistry } from '../kafka_provider'
import { faker } from '@faker-js/faker/locale/pl'

/*
npm start src/step5_avro/produce_avro.ts

*/
const registry = new SchemaRegistry({host: schemaRegistry})

const run = async () => {
  const readFileAsync = promisify(fs.readFile)
  const avroSchema = await readFileAsync(__dirname + '/random.avsc', {encoding: 'utf-8'})

  const {id} = await registry.register({
    type: SchemaType.AVRO,
    schema: avroSchema,
  })

  // Encode using the uploaded schema
  const payload = {id: faker.string.nanoid(), fullName: 'John Doe'}
  const encodedPayload = await registry.encode(id, payload)
  // TODO: fetch length of encoded msg

  // Decode the payload
  const decodedPayload = await registry.decode(encodedPayload)
  // TODO: fetch length of encoded msg

};

run().catch(e => console.error('[example/producer] e.message', e));




