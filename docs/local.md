# Setup local kafka

## Confluent docker-compose

Docker-compose cloned from [cp-all-in-one](https://github.com/confluentinc/cp-all-in-one/tree/7.5.0-post/cp-all-in-one-kraft)

## Apache Kafka and Karapache
[Kafka from Apache](https://github.com/apache/kafka/blob/trunk/docker/examples/README.md)

[Karapace](https://github.com/Aiven-Open/karapace/blob/main/container/compose.yml)
https://github.com/aiven-open/karapace/pkgs/container/karapace

### Test local setup
```sh
kafka-topics --list --bootstrap-server localhost:29092
```
output
```sh
__consumer_offsets
_confluent-command
_confluent-link-metadata
_confluent-metrics
_confluent-telemetry-metrics
_confluent_balancer_api_state
_schemas
```
