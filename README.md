# Kafka NodeJS Playground - Kata

## Zalety Apache Kafka
Jest to lepsze podejście w porównaniu do wysyłania zdarzeń przez HTTP, ponieważ:

- Umożliwia oddzielenie nadawcy i odbiorcy poprzez eventy (loose coupling). Ponieważ nie oczekujesz (ani nie potrzebujesz) natychmiastowej odpowiedzi = asychroniczna komunikacja.
- Jest trwały. Ponieważ eventy (wiadomości) Kafki nie są usuwane po użyciu, możesz odtworzyć te eventy, jeśli usługa wysyłania powiadomień nagle ulegnie awarii.
- Jest skalowalny. Możesz korzystać z eventów Kafki w wielu miejscach, nawet w różnych usługach lub interfejsach API

# warunek wstępny
Lokalna maszyna z zainstalowaną wersją
- nodejs min 20
- docker-compose

# agenda
1. W każdym katalogu `step[number]` jest podkatalog `sol` który zawiera rozwiązania.
2. Niektóre zadania wykorzystują bibliotekę ExpressJS.

### day 1
- NodeJS KafkaJS list topic, create topic, producer. [step1](./src/step1_produce_create_topic/step1_instruction_pl.md)
- NodeJS KafkaJS [step2](./src/step2_consume/step2_instruction_pl.md)
- NodeJS KafkaJS Transformer [step3](./src/step3_transform/step3_instruction_pl.md)

### day 2
- NodeJS KafkaJS Transactions [step4](./src/step4_transaction/step4_instruction_pl.md)
- Avro + schema registry [step5](./src/step5_avro/step5_instruction_pl.md)
- kafka-avro-console-consumer example usage

### day 3
- NodeJS KafkaJS Avro IDL [step6](./src/step6_avro_idl/step6_instruction_pl.md)
- Zaawansowane typy: AVRO IDL [step7](./src/step7_avro_idl_adv/step7_instruction_pl.md)


# KATA
Kata
Co sprawia, że sesja treningowa jest dobra? Potrzebujesz czasu bez przerw i prostej rzeczy, której chcesz spróbować. Musisz próbować tyle razy, ile potrzeba, i czuć się komfortowo, popełniając błędy. Za każdym razem musisz szukać informacji zwrotnej, aby móc pracować nad doskonaleniem. Nie należy wywierać presji: dlatego trudno jest ćwiczyć w środowisku projektowym. pomaga to zachować radość: rób małe kroki do przodu, kiedy tylko możesz. Wreszcie rozpoznasz sesję dobrych ćwiczeń, ponieważ wyjdziesz z niej wiedząc więcej, niż wtedy, gdy na nią wszedłeś.

Code Kata jest próbą przeniesienia tego elementu praktyki do tworzenia oprogramowania. Kata to ćwiczenie w karate, w którym powtarzasz jakąś formę wiele, wiele razy, wprowadzając niewielkie ulepszenia w każdym z nich. Intencja kodu kata jest podobna. Każde z nich jest krótkim ćwiczeniem (około 30 minut do godziny). Niektóre wymagają programowania i można je kodować na wiele różnych sposobów. Niektóre mają charakter otwarty i wymagają przemyślenia zagadnień stojących za programowaniem. Jest mało prawdopodobne, aby istniała jedna poprawna odpowiedź. Mniej więcej co tydzień dodaję nowe kata. Zainwestuj trochę czasu w swoje rzemiosło i wypróbuj je.

Pamiętaj, że celem kata nie jest uzyskanie poprawnej odpowiedzi. Chodzi o to, czego się uczysz po drodze. Celem jest praktyka, a nie rozwiązanie.


### Historia klientów w JS, KafkaJS freeze
Trendy https://npmtrends.com/kafka-node-vs-kafkajs-vs-node-rdkafka

Według [Looking for maintainers](https://github.com/tulios/kafkajs/issues/1603) KafkaJS jest chwilowo zamrożonym projektem. Z moich doświadczeń dotychczas ten klient był bardziej niezawodny niż [node-rdkafka](https://github.com/Blizzard/node-rdkafka). Ten ostatni działa tylko z określonymi, niewspieranym wersjami nodejs.

Na horyzoncie jednak pojawia się [confluent-kafka-javascript](https://github.com/confluentinc/confluent-kafka-javascript) ale jeszcze nie jest PROD ready.

[Migration guide](https://github.com/confluentinc/confluent-kafka-javascript/blob/dev_early_access_development_branch/MIGRATION.md#kafkajs)
