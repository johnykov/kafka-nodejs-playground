# local kafka

## docker-compose
Docker-compose cloned from [cp-all-in-one](https://github.com/confluentinc/cp-all-in-one/tree/7.5.0-post/cp-all-in-one-kraft)

run
```shell
docker-compose up broker 
# with zsh docker-compose plugin
dcup broker schema-registry
```
will download 3GB.

### error
INVALID_REPLICATION_FACTOR
> org.apache.kafka.common.errors.InvalidReplicationFactorException: Unable to replicate the partition 3 time(s): The target replication factor of 3 cannot be reached because only 1 broker(s) are registered.

### FIX modify broker ENVs

confluentinc/cp-kafka:7.6.1
https://docs.confluent.io/platform/current/release-notes/index.html#release-notes-for-cp-version

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
