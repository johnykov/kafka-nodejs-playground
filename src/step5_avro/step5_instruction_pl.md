Link do biblioteki klienta schema registry: https://kafkajs.github.io/confluent-schema-registry/
Link do biblioteki do enkodowania AVRO:  https://github.com/mtth/avsc

1. Stwórz topic
   ```shell
   kafka-topics --create --bootstrap-server localhost:9092 \
   --partitions 1 --replication-factor 1 \
   --topic random-avro
   ```
1. uruchom `produce_avro` i porównaj wielkości JSON to avro message
2. pobierz schema from registry `read_schema`
   - https://kafkajs.github.io/confluent-schema-registry/docs/advanced-usage
2. zobacz magic byte header, idź do `wireEncoder.js`, ile pierwszych bajtów jest zarezerwowane?  
3. stwórz avro_topic
4. napisz producer avro message to topic, https://developer.confluent.io/tutorials/kafka-console-consumer-producer-avro/kafka.html
5. odczytaj CLI kafka-avro-console-consumer
5. napisz avro message consumer, zobacz nieodkodowaną wiadomość
6. przećwicz dodanie nowej lekkiej schemy z tylko ID 
   - https://github.com/mtth/avsc/wiki/Advanced-usage#schema-evolution createResolver, heavyType/ lightType 

