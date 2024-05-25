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
