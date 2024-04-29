import * as avsc from 'avsc'

export class UnwrappedItemType extends avsc.types.LogicalType {
  override _fromValue(val: any) {
    return {
      ...val,
      interactions: val.interactions
        .map((it: any) => it.unwrap())
        .map((it: any) => ({
          ...it,
          ...(it.key && { key: it.key.unwrap() }),
          ...(it.keys && { keys: it.keys.map((el:any)=> el.unwrap()) }),
          ...(it.distractors && { distractors: it.distractors.map((el:any)=> el.unwrap()) }),
        })),
    }
  }

  override _toValue(any: any) {
    return any
  }
}
