# local
kafka-consumer-groups --bootstrap-server localhost:29092 --list
kafka-consumer-groups --bootstrap-server localhost:29092 --group my-test-consumer --describe
kafka-consumer-groups --bootstrap-server localhost:29092 --topic polishpageviews --group calculator-group \
--reset-offsets --to-earliest --execute

# remote
kafka-topics --list --bootstrap-server $(head -1 kafka.properties | cut -d'=' -f2) \
--command-config kafka.properties

kafka-console-consumer --bootstrap-server $(head -1 kafka.properties | cut -d'=' -f2) \
--consumer.config kafka.properties \
--topic polishpageviews \
--property print.timestamp=true \
--from-beginning

kafka-consumer-groups --bootstrap-server $(head -1 kafka.properties | cut -d'=' -f2) --list \
--command-config kafka.properties

kafka-consumer-groups --bootstrap-server $(head -1 kafka.properties | cut -d'=' -f2) --group console-consumer-97238 --describe \
--command-config kafka.properties
