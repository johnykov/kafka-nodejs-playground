# 3 stream processing: consume-transform-produce or read-process-write
1. Stwórz topic
   ```shell
   kafka-topics --create --bootstrap-server localhost:9092 \
   --partitions 3 --replication-factor 1 \
   --topic polish_pageviews
    ```
2. uruchom `continuous_producer.ts`
2. napisz i uruchom `transform.ts`, który będzie ustawiał klucz wiadomości wartością z pola subscriptionTier i wysyłał na inny nowy topic
   możesz potrzebować nowy topic:
    ```shell
    kafka-topics --create --bootstrap-server localhost:9092 \
    --partitions 3 --replication-factor 1 \
    --topic transformed
    ```
3. napisz i uruchom `consumer.ts`, który będzie wyświetlał klucze oraz body wiadomości
4. (opcjonalnie) warto się zastanowić czy eventy nie powinny na tym etapie być zgodne ze specyfikacją https://cloudevents.io/
5. przypomnij sobie za co był odpowiedzialny klucz, jaką gwarancje daje kafka gdy ustawiamy ten sam klucz dla wiadomości?
6. w 3 osobnych oknach terminala powinny działać 3 procesy
   7. continuous_producer
   8. transform
   9. consumer
