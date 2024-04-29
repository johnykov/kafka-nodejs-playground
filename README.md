# agenda warsztatu


### unit 1
- NodeJS KafkaJS [Producer](./src/step1_produce_create_topic/step1_instruction.md) or [Producer PL](./src/step1_produce_create_topic/step1_instruction_pl.md) 
- NodeJS KafkaJS [Consumer](./src/step2_consume/step2_instruction.md)
- NodeJS KafkaJS Transformer

### unit 2
- wstęp do schema registry
- kafka-avro-console-consumer
- java <-> nodejs avro

### unit 3
- Zaawansowane typy: AVRO IDL i schema registry

### ZALETY KAFKA 
Jest to lepsze podejście w porównaniu do wysyłania zdarzeń przez HTTP, ponieważ:

- Umożliwia oddzielenie nadawcy i odbiorcy zdarzenia. Ponieważ nie oczekujesz (ani nie potrzebujesz) natychmiastowej odpowiedzi, żądanie HTTP nie pomaga
- Jest trwały. Ponieważ zdarzenia Kafki nie są usuwane po użyciu, możesz odtworzyć te zdarzenia, jeśli usługa wysyłania powiadomień nagle ulegnie awarii
- Jest skalowalny. Możesz korzystać ze zdarzeń Kafki w wielu miejscach, nawet w różnych usługach lub interfejsach API

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
kafka-topics --list --bootstrap-server localhost:9092
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


# KATA
Kata
Co sprawia, że sesja treningowa jest dobra? Potrzebujesz czasu bez przerw i prostej rzeczy, której chcesz spróbować. Musisz próbować tyle razy, ile potrzeba, i czuć się komfortowo, popełniając błędy. Za każdym razem musisz szukać informacji zwrotnej, aby móc pracować nad doskonaleniem. Nie należy wywierać presji: dlatego trudno jest ćwiczyć w środowisku projektowym. pomaga to zachować radość: rób małe kroki do przodu, kiedy tylko możesz. Wreszcie rozpoznasz sesję dobrych ćwiczeń, ponieważ wyjdziesz z niej wiedząc więcej, niż wtedy, gdy na nią wszedłeś.

Code Kata jest próbą przeniesienia tego elementu praktyki do tworzenia oprogramowania. Kata to ćwiczenie w karate, w którym powtarzasz jakąś formę wiele, wiele razy, wprowadzając niewielkie ulepszenia w każdym z nich. Intencja kodu kata jest podobna. Każde z nich jest krótkim ćwiczeniem (około 30 minut do godziny). Niektóre wymagają programowania i można je kodować na wiele różnych sposobów. Niektóre mają charakter otwarty i wymagają przemyślenia zagadnień stojących za programowaniem. Jest mało prawdopodobne, aby istniała jedna poprawna odpowiedź. Mniej więcej co tydzień dodaję nowe kata. Zainwestuj trochę czasu w swoje rzemiosło i wypróbuj je.

Pamiętaj, że celem kata nie jest uzyskanie poprawnej odpowiedzi. Chodzi o to, czego się uczysz po drodze. Celem jest praktyka, a nie rozwiązanie.
