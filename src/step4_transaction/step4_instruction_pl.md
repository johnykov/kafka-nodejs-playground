1. rzuć okiem na biedną dokumentacje https://kafka.js.org/docs/transactions
2. exactly once semantics - jak jest osiągane?
3. https://github.com/tulios/kafkajs/issues/1221#issuecomment-1032433659 wyłącz autocommit w consumer
4. zwróć uwagę na prawidłową konfigurację producenta, stwórz obiekt transaction
    - użyj operacje send, sendOffset, commit, abort
5. napisz `consumer.ts` aby zobaczyć co jest w topic, 


