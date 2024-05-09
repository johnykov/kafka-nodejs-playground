# example ONLY
#Console producer:

kafka-avro-console-producer \
  --topic orders-avro \
  --bootstrap-server broker:9092 \
  --property schema.registry.url=http://localhost:8081 \
  --property value.schema="$(< /etc/tutorial/orders-avro-schema.json)" \
  --property key.serializer=org.apache.kafka.common.serialization.StringSerializer \
  --property parse.key=true \
  --property key.separator=":"
#Console consumer:

kafka-avro-console-consumer \
  --topic orders-avro \
  --property schema.registry.url=http://localhost:8081 \
  --bootstrap-server broker:9092 \
  --property key.deserializer=org.apache.kafka.common.serialization.StringDeserializer \
  --property print.key=true \
  --property key.separator="-" \
  --from-beginning

# example via docker
1. docker exec -it schema-registry kafka-avro-console-consumer --topic random-avro --bootstrap-server broker:9092 --property schema.registry.url=http://localhost:8081
2. npm start src/step5_avro/sol/produce_avro.ts


docker run --rm -v ~/projects/training/:/home/appuser/ confluentinc/cp-schema-registry:7.6.1 \
kafka-avro-console-consumer --property schema.registry.url=https://<> \
--consumer.config ~/projects/training/config.properties \
--bootstrap-server <>:9092 \
--topic <> \
--from-beginning

#https://developer.confluent.io/tutorials/kafka-console-consumer-producer-avro/kafka.html

 4. npm start src/step5_avro/sol/produce_avro.ts
 5. docker exec -it schema-registry bash
 6. kafka-avro-console-consumer --topic random-avro --bootstrap-server broker:9092 --property schema.registry.url=http://localhost:8081
