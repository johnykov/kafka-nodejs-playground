## setup + ćwiczenie 1 produce
1. npm i
2. `cp .example.env .env`, uzupełnij .env
3. zmień nazwę `topic` w kodzie w `kafka_provider`
4. uruchom producer.ts
    ```sh
   npx tsx --env-file=.env src/step1/producer.ts
   #   or local
   npx tsx --env-file=.env.local src/step1/producer.ts
   ```
5. zauważ: `"error":"This server does not host this topic-partition",`
6. wylistuj topiki `adm_list_topics`, porównaj efekt
   ```shell
   kafka-consumer-groups --bootstrap-server localhost:9092 --list
   ```
7. pick solution: 
   - either enable auto.create.topics or 
   - write script `adm_create_topic` ale tym razem 3 partycje 
   - ew. CLI
8. powtórz producer
9. describe topic
   ```shell
   kafka-topics --bootstrap-server localhost:9092 --describe --topic <topicname>
   ```
  - ile partycji, replic, ISR (in-sync-replicas)
10. compression https://kafka.js.org/docs/producing
