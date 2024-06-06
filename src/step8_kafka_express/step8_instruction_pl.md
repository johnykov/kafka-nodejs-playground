# step8
- przykład "component driven architecture"
  - plik app.ts, katalog components
- uruchom
    ```shell
    npm run dev src/step8_kafka_express/app.ts
    ```
1. Stwórzy topic user i order z 3 partycjami z 1 RF
   ```shell
      ./kafka-topics.sh --create --bootstrap-server localhost:9092 \
      --partitions 3 --replication-factor 1 \
      --topic polish.hellos
   ``` 
2. dopisz do wybranego routera: user,order obsługę metody POST, która będzie zapisywała body payload na topic
3. przetestuj rozwiązanie curl, albo httpie(brew install httpie)
   ```shell
   http :9123/user
   http :9123/order
    ```
4. a


