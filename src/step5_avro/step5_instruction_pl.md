Link do biblioteki klienta schema registry: https://kafkajs.github.io/confluent-schema-registry/

Link do biblioteki do enkodowania AVRO:  https://github.com/mtth/avsc

1. Zatrzymaj poprzedni cluster
      ```sh
   docker-compose -f dc.apache.multi.yml down
   ```
2. uruchom pierwszy klaster z apache kafka z karapace
      ```sh
   docker-compose -f dc.apache.yml up
   docker exec -it kafka-1 bash
   cd opt/kafka/bin
   ```
3. Stwórz topic
   ```shell
   kafka-topics --create --bootstrap-server localhost:9092 \
   --partitions 1 --replication-factor 1 \
   --topic random-avro
   ```
4. uruchom `produce_avro` i porównaj wielkości JSON to avro message
5. pobierz schema from registry `read_schema`
   - https://kafkajs.github.io/confluent-schema-registry/docs/advanced-usage
6. zobacz magic byte header, idź do `wireEncoder.js`, ile pierwszych bajtów jest zarezerwowane?  
7. stwórz avro_topic
8. napisz producer avro message to topic, https://developer.confluent.io/tutorials/kafka-console-consumer-producer-avro/kafka.html
9. odczytaj CLI kafka-avro-console-consumer
10. napisz avro message consumer, zobacz nieodkodowaną wiadomość
11. przećwicz dodanie nowej lekkiej schemy z tylko ID 
   - https://github.com/mtth/avsc/wiki/Advanced-usage#schema-evolution createResolver, heavyType/ lightType 

