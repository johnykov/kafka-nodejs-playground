### Wymaganie
System Spotiflix zamówił aplikację, która w NestJS przyjmuje zamówienia na subskrypcje
(obiekty typu step3_transform/domain.ts). Może być REST kontroller ale może też być cykliczny generator z interwałem jak w ćwiczeniu step3 continous_producer. 
Zamówienia zapisywane będą w lokalnej bazie SQLLite.

Zaprojektuj rozwiązanie "Reliable" dostarczania requestów na Kafkę, z wykorzystaniem `outbox pattern`.


### Propozycja rozwiązania
Tabele bazie:
- user_subscription
- outbox z kolumną status: [PENDING, COMPLETE]

Potrzebne są 2 usługi:
- serwis NestJS który w transakcji zapisuje rekordy do oby w/w tabel
- serwis który skanuje tabele outbox i dla każdego rekordu status=PENDING robi publish na Kafkę, 
  - w przypadku sukcesu ustawia status=COMPLETE 



Debezium source: https://debezium.io/blog/2019/02/19/reliable-microservices-data-exchange-with-the-outbox-pattern/
