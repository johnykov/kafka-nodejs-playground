# local
kafka-consumer-groups --bootstrap-server localhost:9092 --list
kafka-consumer-groups --bootstrap-server localhost:9092 --group my-test-consumer --describe
kafka-consumer-groups --bootstrap-server localhost:9092 --topic polishpageviews --group calculator-group \
--reset-offsets --to-earliest --execute
