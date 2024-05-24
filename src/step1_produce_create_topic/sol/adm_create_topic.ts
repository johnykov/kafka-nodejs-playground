import { kafka } from '../../kafka_provider'
/*
npm start src/step1_produce_create_topic/sol/adm_create_topic.ts
*/

const admin = kafka.admin();

const run = async () => {
  await admin.connect();

  const result = await admin.createTopics({topics: [{topic: 'step1.from.script', numPartitions: 3}]})
  console.log(result)
  await admin.disconnect();
};

run().catch(e => console.error('[step1/adm] e.message', e));
