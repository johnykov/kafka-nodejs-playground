import path from 'path'
import { avdlToAVSCAsync } from '@kafkajs/confluent-schema-registry'
import _ from 'lodash'

export async function avroSchemaFromIdl() {
  const convert = async (name: string) =>
    avdlToAVSCAsync(path.join(__dirname, name))
  const mainAvroSchema = await convert('itemPublishingSchema.avdl')

  const interactionChoiceSchemas = await convert('interaction_choice.avdl')
  const interactionTextSchemas = await convert('interaction_text.avdl')

  // re-use Text type from Choice in TextEntry
  interactionTextSchemas.fields.find(
    (el: any) => el.name === 'keys',
  ).type.items = 'Text'

  const interactionSchemas = _.map(
    [interactionChoiceSchemas, interactionTextSchemas],
    (it) => _.omit(it, 'namespace'),
  )

  // set proper interactions types
  mainAvroSchema.fields.find(
    (el: any) => el.name === 'interactions',
  ).type.items = interactionSchemas

  return mainAvroSchema
}
