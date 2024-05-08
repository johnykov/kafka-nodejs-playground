kafka-consumer-groups --bootstrap-server localhost:29092 --list
kafka-consumer-groups --bootstrap-server localhost:29092 --group my-test-consumer --describe
kafka-consumer-groups --bootstrap-server localhost:29092 --topic submissions --group calculator-group --reset-offsets --to-earliest --execute
