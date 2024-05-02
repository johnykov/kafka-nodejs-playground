https://kafkajs.github.io/confluent-schema-registry/
https://github.com/mtth/avsc

1. uruchom `produce_avro` i porównaj wielkości JSON to avro message
2. pobierz schema from registry `read_schema`
   - https://kafkajs.github.io/confluent-schema-registry/docs/advanced-usage
2. zobacz magic byte header, idź do `wireEncoder.js`, ile pierwszych bajtów jest zarezerwowane?  
3. stwórz avro_topic
4. napisz producer avro message to topic, https://developer.confluent.io/tutorials/kafka-console-consumer-producer-avro/kafka.html
5. odczytaj CLI kafka-avro-console-consumer
5. napisz avro message consumer
6. przećwicz avro schema evolution 
   - https://github.com/mtth/avsc/wiki/Advanced-usage#schema-evolution createResolver, heavyType/ lightType 
   - https://docs.confluent.io/platform/current/schema-registry/fundamentals/schema-evolution.html BACKWARD /FORWARD 
