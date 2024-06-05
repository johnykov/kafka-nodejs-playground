https://kafkajs.github.io/confluent-schema-registry/docs/usage#subjects
https://avro.apache.org/docs/1.11.1/idl-language/

1. ```shell
      kafka-topics --create --bootstrap-server localhost:9092 \
      --partitions 3 --replication-factor 1 \
      --topic job-avro
   ```
1. skonwertuj AVDL do AVSC
2. uruchom producera i konsumera korzystających ze schemy
3. przećwicz avro schema evolution, dodaj nowe pole `date submitDate` w respekcie do https://docs.confluent.io/platform/current/schema-registry/fundamentals/schema-evolution.html BACKWARD /FORWARD
2. union, include https://kafkajs.github.io/confluent-schema-registry/docs/schemas
