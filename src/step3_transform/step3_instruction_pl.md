# 3 stream processing: consume-transform-produce or read-process-write
1. uruchom `continuous_producer'
2. napisz i uruchom `transform.ts`, który będzie ustawiał klucz wartością z pola subscriptionTier i wysyłał na inny nowy topic
3. napisz i uruchom `consumer`, który będzie wyświetlał klucze
4. (opcjonalnie) warto się zastanowić czy eventy nie powinny na tym etapie być zgodne ze specyfikacją https://cloudevents.io/
5. przypomnij sobie za co był odpowiedzialny klucz, jaką gwarancje daje kafka gdy ustawiamy ten sam klucz dla wiadomości?
