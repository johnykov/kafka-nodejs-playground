# local
- zainstaluj `kcat`
1. wyświet topiki i partycje
  ```sh
  kcat -b localhost:9092 -L
  ```
2. czytanie z topic
  ```sh
  kcat -b localhost:9092 -t transactional
  ```
zwróć uwagę, że wiadomości pojawiają się partycjami, np. najpierw z jednej, drugiej i trzeciej


# Remote

kcat -F kcat.properties -L

kcat -F kcat.properties -t polishpageviews
