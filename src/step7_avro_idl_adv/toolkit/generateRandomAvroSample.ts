import path from 'path'
import fs from 'fs'
import * as avro from 'avsc'
;import { avroSchemaFromIdl } from '../convertIDLtoJSONAvro'
/*
npx tsx src/step7_avro_idl_adv/toolkit/generateRandomAvroSample.ts
* */
(async () => {
  const avroSchema = await avroSchemaFromIdl()

  const type = avro.Type.forSchema(avroSchema)
  // console.log(JSON.stringify(type.random(), null, 2))
  fs.writeFileSync(
    path.join(__dirname, `../generated/random${Date.now()}.json`),
    JSON.stringify(type.random(), null, 2),
  )
})()
