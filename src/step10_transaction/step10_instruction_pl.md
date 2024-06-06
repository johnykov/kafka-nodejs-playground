1. Stwórzy topic 
   ```shell
      kafka-topics --create --bootstrap-server localhost:9092 \
      --partitions 3 --replication-factor 1 \
      --topic transactional
   ```
2. Zwróć uwagę na konieczne ustawienia dla gwarancji EoS w dokumentacji https://kafka.js.org/docs/transactions
3. exactly once semantics - jak jest osiągane?
   - https://developer.confluent.io/learn/kafka-transactions-and-guarantees/
   - https://www.confluent.io/blog/transactions-apache-kafka/
   - https://www.lydtechconsulting.com/blog-kafka-idempotent-consumer.html
4. wyłącz autocommit w consumer [tak jak zasugerowano](https://github.com/tulios/kafkajs/issues/1221#issuecomment-1032433659)
5. zwróć uwagę na prawidłową konfigurację producenta, stwórz obiekt transaction
    - użyj operacje send, sendOffset, commit, abort
6. napisz `consumer.ts` aby zobaczyć co jest w topic

### transactional_abort
6. Uruchom `npm start src/step4_transaction/sol/transactional_abort.ts`
7. [fix](https://github.com/tulios/kafkajs/issues/302) "The producer attempted to update a transaction while another concurrent operation on the same transaction was ongoing", lock or delay, single producer
8. zweryfikuj że abort transakcji działa po uruchomieniu CURRENT-OFFSET, LOG-END-OFFSET, LAG, 
   ```sh
   kafka-consumer-groups --bootstrap-server localhost:9092 --group my-transactional-abort --describe
   ```
9. zwróć uwagę na numerację offset, dlaczego na topicu są parzyste offsety? co to jest transaction marker?
   ```shell
   kafka-console-consumer --topic transactional --bootstrap-server localhost:9092 \
   --from-beginning --property print.offset=true \
   --isolation-level=read_committed

   kafka-console-consumer --topic transactional --bootstrap-server localhost:9092 \
   --from-beginning --property print.offset=true \
   --isolation-level=read_uncommitted
   ```
   porównaj offsety
10. Co to jest: zombie fencing https://www.confluent.io/blog/transactions-apache-kafka/, each transactional producer be assigned a unique identifier called the transactional.id
