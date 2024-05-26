1. Zacznij review kodu od pliku `itemPublishingSchema.avdl`
2. Zwróć szczególną uwagę na
    ```avroidl
    array<union{ChoiceInteraction, TextEntryInteraction}> interactions = [];
    ```
2. wygeneruj przykładową wiadomość
   ```shell
   npx tsx src/step7_avro_idl_adv/toolkit/generateRandomAvroSample.ts
   ```
   zajrzyj do pliku `random[0-9].json` w katalogu `generated`
3. generate AVRO schema from IDL and typescript types from avro
      ```shell
   npx tsx src/step7_avro_idl_adv/toolkit/generateAvroTStypes.ts
   ```
   zobacz rezultaty w katalogu `generated`
