import { kafka } from '../kafka_provider'
/*
npm start src/step9_slow_consumer/consumer_batch.ts
*/

const topic = 'polish.hellos'
const sleep = (timeInMs: number) =>
  new Promise(resolve => {
    setTimeout(resolve, timeInMs)
  })

const consumer = kafka.consumer({groupId: 'my-test-consumer-batch', sessionTimeout: 8000});
const run = async () => {
  await consumer.connect();
  await consumer.subscribe({topic, fromBeginning: true})
  await consumer.run({
    eachBatchAutoResolve: false,
    eachBatch: async ({
                        batch,
                        resolveOffset,
                        heartbeat,
                        commitOffsetsIfNecessary,
                        uncommittedOffsets,
                        isRunning,
                        isStale,
                        pause,
                      }) => {
      for (let message of batch.messages) {
        console.log({
          topic: batch.topic,
          partition: batch.partition,
          highWatermark: batch.highWatermark,
          message: {
            offset: message.offset,
            key: message.key?.toString(),
            value: message.value?.toString(),
            headers: message.headers,
          }
        })
        await sleep(9000)
        resolveOffset(message.offset)
        // await heartbeat()
      }
    },
  })

  // consumer.on('consumer.heartbeat', (ev)=> console.log(new Date(), ev))
};

async function gracefullyClose() {
  await consumer.disconnect()
}

process.on('SIGINT', gracefullyClose)
process.on('SIGTERM', gracefullyClose)
run().catch(e => console.error('[example/consumer] e.message', e));
