import path from 'path'
import fs from 'fs'
import * as avro from 'avsc'
;import { avroSchemaFromIdl } from '../convertIDLtoJSONAvro'
(async () => {
  const avroSchema = await avroSchemaFromIdl()

  const type = avro.Type.forSchema(avroSchema)
  // console.log(JSON.stringify(type.random(), null, 2))
  fs.writeFileSync(
    path.join(__dirname, `../../generated/random${Date.now()}.json`),
    JSON.stringify(type.random(), null, 2)
  )
})()
