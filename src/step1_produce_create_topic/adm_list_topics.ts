import { kafka } from '../kafka_provider'
/*
npx tsx --env-file=.env src/step1_produce_create_topic/adm_list_topics.ts
npx tsx --env-file=.env.local src/step1_produce_create_topic/adm_list_topics.ts
*/

const admin = kafka.admin();

const run = async () => {
  await admin.connect();

  const topics = await admin.listTopics()
  console.log(`Available topics`);
  for (const topic in topics) {
    console.log(topics[topic])
  }

  await admin.disconnect();
};

run().catch(e => console.error('[example/producer] e.message', e));
