#!/bin/zsh
kafka-consumer-groups --bootstrap-server localhost:29092 \
--topic job-avro --group job-avro-consumer \
--reset-offsets --to-earliest --execute
