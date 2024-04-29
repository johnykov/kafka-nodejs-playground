import { kafka, topic } from '../../kafka_provider'
/*
npx tsx --env-file=.env src/step1_produce_create_topic/sol/adm_create_topic.ts
npx tsx --env-file=.env.local src/step1_produce_create_topic/sol/adm_create_topic.ts

CALL twice
*/

const admin = kafka.admin();

const run = async () => {
  await admin.connect();

  const result = await admin.createTopics({topics: [{topic, numPartitions: 3}]})
  console.log(result)
  await admin.disconnect();
};

run().catch(e => console.error('[example/producer] e.message', e));
