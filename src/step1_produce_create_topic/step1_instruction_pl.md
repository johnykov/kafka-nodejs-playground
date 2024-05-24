## setup + ćwiczenie 1 produce
1. Po sklonowaniu repozytorium, przejdź do terminala, zainstaluj zależności
   ```sh
   npm i
   ```
2. Otwórz IDE, zaimportuj projekt
3. Przejrzyj w IDE plik `.env.local`, zweryfikuj czy porty brokera i schema-registry są takie jak w pliku docker-compose.
4. W osobnym terminalu, uruchom kafkę poprzed docker-compose.
   ```sh
   docker-compose -f dc.apache.yml up
   ```
   za pierwszym razem, proces potrwa chwile (ok 10min) dłużej gdyż tyle zajmie ściąganie obrazów dockerowych.
5. Otwórz terminal kafka w docker desktop
   
       docker desktop > open dashboard > containers > [kafka-nodejs-playground] > [broker] > Exec (*tab)
       
       cd /opt/kafka/bin
   LUB Zainstaluj klienta kafka lokalnie.
   ```sh
   brew install kafka
   ```
   
6. wylistuj wszystkie topiki
   ```sh
   #local: 
      kafka-topics --list --bootstrap-server localhost:9092
   #via docker: 
      ./kafka-topics.sh --list --bootstrap-server localhost:9092
   ```
7. Stwórz topic
   ```sh
   kafka-topics --create --bootstrap-server localhost:9092 \
    --partitions 1 --replication-factor 1 \
    --topic step1.test
   #delete topic
   kafka-topics --delete --topic step1_test --bootstrap-server localhost:9092
   ```
8. Stwórz topic via skrypt `adm_create_topic.ts` wklej poniższy kod w odpowiednie miejsce
   ```typescript
   const topics = await admin.createTopics({topics: [{topic: 'step1.from.script'}]})
   ```
9. uruchom producer.ts
    ```sh
   npm start src/step1/producer.ts
   ```
10. wylistuj topiki tym razem poprzez skrypt 
    ```sh
    npm start src/step1/adm_list_topics.ts
    ``` 
5. Gdy zauważysz błąd: `"error":"This server does not host this topic-partition"` spróbuj stworzyć odpowiednio nazwany topik
7. Topik można stworzyć na 2 sposoby manualnie albo automatycznie: 
   - automatycznie, ustawiając w producerze `auto.create.topics` na true  
   - manualnie skryptem `adm_create_topic`  
   - manualnie via CLI
8. powtórz producer
9. Uruchom polecenie `describe topic` aby zaobserwować metadane dot. topic
   ```shell
   kafka-topics --bootstrap-server localhost:9092 --describe --topic polish.hellos
   ```
  - ile partycji, replic, ISR (in-sync-replicas)

