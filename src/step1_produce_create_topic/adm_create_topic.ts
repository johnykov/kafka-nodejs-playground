import { kafka } from '../kafka_provider'
/*
npm start src/step1_produce_create_topic/adm_create_topic.ts
*/

const admin = kafka.admin();

const run = async () => {
  await admin.connect();

  //FIXME: put code below

  await admin.disconnect();
};

run().catch(e => console.error('[step1/adm] e.message', e));
