kafka-console-consumer --bootstrap-server $(head -1 kafka.properties | cut -d'=' -f2) \
--consumer.config kafka.properties \
--topic submissions \
--property print.timestamp=true \
--from-beginning

kafka-topics --list --bootstrap-server $(head -1 kafka.properties | cut -d'=' -f2) \
--command-config kafka.properties
