# 2 consume
1. uruchom `consumer.ts`
2. napraw błąd wczesnego kończenia skryptu
3. zasyskrubj się na event HEARTBEAT, znajdź interwał w jakim broker pinguje konsumenta
4. uruchom `consumer.ts` jeszcze raz, zaobserwuj procesowanie
5. wylistuj grupy konsumentów
   ```
   kafka-consumer-groups --bootstrap-server localhost:29092 --list
   ```
7. sprawdź LAG konsumenta dla wybranego topicu
   ```sh
   kafka-consumer-groups --bootstrap-server localhost:29092 --group my-test-consumer --describe
   ```
8. zresetuj TESTOWO offset (UWAGA operaja wrażliwa lepiej świadomie nie uruchamiać na PRODUKCJI )    
   ```sh
   kafka-consumer-groups --bootstrap-server localhost:29092 \
   --topic polish_pageviews --group my-test-consumer \
   --reset-offsets --to-earliest --execute
   ```
   sprawdź CURRENT-OFFSET oraz LAG ponownie
9. 
