import avro from 'avsc'
import { avdlToAVSCAsync } from '@kafkajs/confluent-schema-registry'
import fs from 'fs'
import path from 'path'
/*
npx tsx --env-file=.env.local src/step6_avro_idl/convert.ts

*/
const run = async () => {
  const readerSchema = await avdlToAVSCAsync(__dirname+'/simple.avdl')
  console.log(readerSchema)
  fs.writeFileSync(
    path.join(__dirname, `/${Date.now()}.avsc`),
    JSON.stringify(readerSchema, null, 2),
  )
}

run().catch(e => console.error('[example/producer] e.message', e));
