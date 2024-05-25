# Docker image size comparison 
![image](docker_image_size.png)

 Setup local kafka
### Confluent default docker-compose

Docker-compose cloned from [cp-all-in-one](https://github.com/confluentinc/cp-all-in-one/tree/7.5.0-post/cp-all-in-one-kraft)

Example in docker-compose.classic.yml file in root dir.

### Apache Kafka and Karapache
1. [Kafka from Apache](https://github.com/apache/kafka/blob/trunk/docker/examples/README.md)

2. [Karapace](https://github.com/Aiven-Open/karapace/blob/main/container/compose.yml)
https://github.com/aiven-open/karapace/pkgs/container/karapace


### Test local setup when using Confluent stack
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
