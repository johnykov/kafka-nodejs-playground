## setup exercise 1
1. npm i
2. `cp .example.env .env`, fill in .env
3. rename `topic` in source code
4. run producer.ts
    ```sh
   npx tsx --env-file=.env src/step1/producer.ts
   npx tsx --env-file=.env.local src/step1/producer.ts
   ```
5. notice: `"error":"This server does not host this topic-partition",`
6. list topics with adm_list_topics
7. pick solution: either enable auto.create.topics or write script adm_create_topic
8. repeat producer
