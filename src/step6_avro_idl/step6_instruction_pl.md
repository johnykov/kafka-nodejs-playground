https://kafkajs.github.io/confluent-schema-registry/docs/usage#subjects
https://avro.apache.org/docs/1.11.1/idl-language/

1. ```shell
      kafka-topics --create --bootstrap-server localhost:29092 \
      --partitions 3 --replication-factor 1 \
      --topic job-avro
   ```
1. skonwertuj AVDL do AVSC
2. uruchom producera i konsumera korzystających ze schemy
3. dodaj nowe pole w respekcie do https://github.com/mtth/avsc/wiki/Advanced-usage#schema-evolution
2. union, include https://kafkajs.github.io/confluent-schema-registry/docs/schemas
