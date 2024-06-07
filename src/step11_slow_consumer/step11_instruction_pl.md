1. Jeśli podczas nauki odczytasz wszystkie wiadomości w topika i tym "przesuniesz offset" to po prostu dodaj kolejna testową wiadomość via
   ```shell
   npm start src/step1_produce_create_topic/producer.ts
   ```
2. W pliku `consumer_batch.ts` ustaw nazwę topica na 'polish.hellos' i uruchom
   ```shell
   npm start src/step9_slow_consumer/consumer_batch.ts
   ```
3. Zwróć uwagę, że consumer ma ustawione `sessionTimeout: 8000` jednak procesowanie wiadomości trwa dłużej
   `await sleep(9000)`. Wniosek czas procesowania wiadomości jest dłuższy niż interwał pomiędzy heartbeat.
4. Po uruchomieniu `consumer_batch.ts` powinny być 2 okna terminali otwarte, broker + consumer
5. Przeanalizuje output.log albo logi uruchomione brokera i konsumenta
6. Przeanalizuj nieskończoną pętle przetwarzania, gdy konsument nie wyśle heartbeat w wyznaczonym czasie (sessionTimeout)
   -  Broker - group coordinator - odpina i usuwa konsumenta `Member kafkajs-63f58bd1-829e-4b58-bbf5-9b3befcc2418 in group my-test-consumer-batch has failed, removing it from the group`
   -  Group coordinator jako że jeden konsument opuścił grupę triggeruje rebalance. `Preparing to rebalance group`
   -  Group coordinator identyfikuje podłączonego konsumenta, którego włącza do grupy `Dynamic member with unknown member id joins group`
   -  Ponowny rebalance `Preparing to rebalance group my-test-consumer-batch` po dołączeniu nowego konsumenta.
   - . Konsument zaczyna prace `Assignment received from leader`
   - . Konsument timeoutuje ponownie

## Rozwiązanie:
1. Łatwe: Zwiększyć sessionTime, co pociągnie konsekwencje późniejszej detekcji faktycznie obciążonego konsumenta
2. Zastosuj pause/resume https://kafka.js.org/docs/consuming#a-name-pause-resume-a-pause-resume
   - Przykład: sytuacja, w której może to być przydatne, ma miejsce, gdy zależność zewnętrzna używana przez konsumenta jest pod zbyt dużym obciążeniem
   - Rozwiązanie adaptacyjne jednak zwiększa complexity
5. use eachMessage
6. sprawdzić `consumer group describe`
