import { avdlToAVSCAsync } from '@kafkajs/confluent-schema-registry'
import fs from 'fs'
import path from 'path'
import { toTypeScript } from '@ovotech/avro-ts'
/*
npm start src/step6_avro_idl/convert.ts
*/
const run = async () => {
  const readerSchema = await avdlToAVSCAsync(__dirname+'/job.avdl')
  console.log(readerSchema)
  fs.writeFileSync(
    path.join(__dirname, `/job-schema.avsc`),
    JSON.stringify(readerSchema, null, 2),
  )
  const ts = toTypeScript(readerSchema)

  fs.writeFileSync(path.join(__dirname, '/generated.d.ts'), ts)
}

run().catch(e => console.error('[example/producer] e.message', e));
