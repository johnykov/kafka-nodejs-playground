
### step9 przykład nestjs + [kafka](https://docs.nestjs.com/microservices/kafka)
1. Stwórzy topic z 3 partycjami z 1 RF
   ```shell
      kafka-topics --create --bootstrap-server localhost:9092 \
      --partitions 3 --replication-factor 1 \
      --topic huge_client_clicks
   ```
2. uruchom
    ```shell
    npm i
    npm run start:dev
    ```
2. przejrzyj `src/kafka`
3. uruchom i przetestuj produce
    ```sh
    echo '{"value":"gamers_click"}' | http POST :3000/kafka/send/huge_client_clicks
    ```
4. uruchom consume
   ```sh
   http :3000/kafka/consume/huge_client_clicks
   ```
   sprawdź konsole


