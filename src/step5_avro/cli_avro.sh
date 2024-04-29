

docker run --rm -v ~/projects/training/:/home/appuser/ confluentinc/cp-schema-registry:7.6.1 \
kafka-avro-console-consumer --property schema.registry.url=https://<> \
--consumer.config ~/projects/training/config.properties \
--bootstrap-server <>:9092 \
--topic <> \
--from-beginning
