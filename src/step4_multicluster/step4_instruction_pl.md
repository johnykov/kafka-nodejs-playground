1. Zatrzymaj poprzedni cluster
      ```sh
   docker-compose -f dc.apache.yml down
   ```
2. uruchom nowy, multi-cluster
      ```sh
   docker-compose -f dc.apache.multi.yml up
   docker exec -it kafka-1 bash
   cd opt/kafka/bin
   ```
3. Stwórzy topic z 3 partycjami z 3 RF, zwróć uwagę na port: z zewn `29092` z wewn `19092` [dlaczego tak?](https://www.confluent.io/blog/kafka-listeners-explained/)
   ```shell
      ./kafka-topics.sh --create --bootstrap-server localhost:19092 \
      --partitions 3 --replication-factor 3 \
      --topic polish.hellos
   ```
4. sprawdź utworzony topic
   ```shell
   ./kafka-topics --list --bootstrap-server localhost:9092
   ```
5. uruchom cli kafka console consumer
   ```shell
   ./kafka-console-consumer --bootstrap-server localhost:9092 --from-beginning --group cli-group1 --topic random-avro --property "print.key=true" --property print.headers=true
   ```
6. uruchom [cli kafka console producer](https://docs.confluent.io/kafka/operations-tools/kafka-tools.html)
   ```shell
   echo "foo:fooValue" | ./kafka-console-producer.sh --bootstrap-server localhost:19092 --topic polish.hellos  --property "parse.key=true" --property "key.separator=:"
   ```
7. wylistuj grupy konsumentów
   ```sh
   ./kafka-consumer-groups.sh --bootstrap-server localhost:19092 --list
   ```
8. wywołaj describe na grupie
   ```sh
   ./kafka-consumer-groups.sh --bootstrap-server localhost:19092 --group cli-group --describe
   ```
9. wywołaj describe na topicu
   ```sh
   ./kafka-topics.sh --bootstrap-server localhost:19092 --describe --topic polish.hellos
   ```
10. [Testy wydajnościowe Kafka Producer](https://rustic-candytuft-314.notion.site/Publish-Subscribe-b17cfbb86a2d46f887db1b54d887afa2)
11. artykuł do zapoznania [Benchmarking Apache Kafka: 2 Million Writes Per Second (On Three Cheap Machines)](https://engineering.linkedin.com/kafka/benchmarking-apache-kafka-2-million-writes-second-three-cheap-machines)
11. przykładowe [scenariusze testów perf](https://gist.github.com/ueokande/b96eadd798fff852551b80962862bfb3)
