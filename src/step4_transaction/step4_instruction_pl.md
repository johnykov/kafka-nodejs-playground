1. Stwórzy topic 
   ```shell
      kafka-topics --create --bootstrap-server localhost:29092 \
      --partitions 3 --replication-factor 1 \
      --topic transactional
   ```
2. Zwróć uwagę na konieczne ustawienia dla gwarancji EoS w dokumentacji https://kafka.js.org/docs/transactions
2. exactly once semantics - jak jest osiągane?
   - https://developer.confluent.io/learn/kafka-transactions-and-guarantees/
   - https://www.confluent.io/blog/transactions-apache-kafka/
   - https://www.lydtechconsulting.com/blog-kafka-idempotent-consumer.html
3. https://github.com/tulios/kafkajs/issues/1221#issuecomment-1032433659 wyłącz autocommit w consumer
4. zwróć uwagę na prawidłową konfigurację producenta, stwórz obiekt transaction
    - użyj operacje send, sendOffset, commit, abort
5. napisz `consumer.ts` aby zobaczyć co jest w topic

### transactional_abort
6. Uruchom `npm start src/step4_transaction/sol/transactional_abort.ts`
7. fix "The producer attempted to update a transaction while another concurrent operation on the same transaction was ongoing", lock or delay, single producer
7. zweryfikuj że abort transakcji działa po uruchomieniu CURRENT-OFFSET, LOG-END-OFFSET, LAG, 
   ```sh
   kafka-consumer-groups --bootstrap-server localhost:29092 --group my-transactional-abort --describe
   ```
