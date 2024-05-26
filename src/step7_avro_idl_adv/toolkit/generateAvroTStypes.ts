import path from 'path'
import fs from 'fs'
import { toTypeScript } from '@ovotech/avro-ts'
;import { avroSchemaFromIdl } from '../convertIDLtoJSONAvro'
(async () => {
  const avroSchema = await avroSchemaFromIdl()

  console.log(JSON.stringify(avroSchema, null, 2))

  const ts = toTypeScript(avroSchema)

  fs.writeFileSync(
    path.join(__dirname, '../generated/processedItemAVRO.json'),
    JSON.stringify(avroSchema, null, 2),
  )

  fs.writeFileSync(path.join(__dirname, '../generated/processedItemTypes.d.ts'), ts)
})()
