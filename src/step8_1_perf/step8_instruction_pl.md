1. stwórz swój własny topic na CC, wykorzytaj do tego `cc.properties`
   ```shell
   kafka-topics --create --bootstrap-server $(head -1 cc.properties | cut -d'=' -f2) \
   --command-config cc.properties \
   --partitions 3 --replication-factor 3 \
   --topic polish.[myname]
   ```
2. uruchom test wydajnościowy z ack=1
   ```shell
   kafka-producer-perf-test \
   --topic polish.[myname] \
   --num-records 500000 \
   --record-size 100 \
   --throughput -1 \
   --producer-props acks=1 \
   --producer.config cc.properties \
   --print-metrics
   ```
3. uruchom test wydajnościowy z ack=all
   ```shell
   kafka-producer-perf-test \
   --topic polish.[myname] \
   --num-records 500000 \
   --record-size 100 \
   --throughput -1 \
   --producer-props acks=all \
   --producer.config cc.properties \
   --print-metrics
   ```
   porównaj wyniki, czy jest jakaś różnica w ack?
4. More on: https://developer.confluent.io/courses/architecture/producer-hands-on/
