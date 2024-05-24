import { kafka } from '../kafka_provider'
/*
npm start src/step1_produce_create_topic/adm_list_topics.ts
*/

const admin = kafka.admin();

const run = async () => {
  await admin.connect();

  const topics = await admin.listTopics()
  console.log('Available topics:')

  for (const topic in topics) {
    console.log(topics[topic])
  }

  await admin.disconnect();
};

run().catch(e => console.error('[step1/adm] e.message', e));
