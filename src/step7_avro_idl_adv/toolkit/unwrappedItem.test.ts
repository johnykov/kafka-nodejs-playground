import { itemTransform } from '../../itemTransform'
import choiceInteractionInput from '../../test/choiceInteraction/input.json'
import choiceInteractionOutput from '../../test/choiceInteraction/output-transformed-decoded-avro-unwrap.json'
import * as avro from 'avsc'
import { avroSchemaFromIdl } from '../convertIDLtoJSONAvro'
import { UnwrappedItemType } from './unwrappedItem'
import type { IncomingTransformedItem } from '../../itemProcessedType'

describe('unwrappedItem', () => {
  describe('with choiceInteraction', () => {
    it('should encode with AVRO schema and decode unwrapped', async () => {
      //given
      const schema = await avroSchemaFromIdl()

      // custom logic
      schema.logicalType = 'unwrappedItem'
      const type = avro.Type.forSchema(schema, {
        logicalTypes: { unwrappedItem: UnwrappedItemType },
      })

      const transformedItem = itemTransform(choiceInteractionInput as IncomingTransformedItem)

      //when
      const libEncodedBuffer = type.toBuffer(transformedItem)
      const actualLibDecoded = type.fromBuffer(libEncodedBuffer)

      //then
      expect(actualLibDecoded).toEqual(expect.objectContaining(choiceInteractionOutput))
    })
  })


})
