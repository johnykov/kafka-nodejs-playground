class MyController {
  async created() {
    this.kafka = new Kafka({
      clientId: 'my-app',
      brokers: ['localhost:9092']
    });
    this.consumer = this.kafka.consumer({ groupId: 'my-group'});
    this.producer = this.kafka.producer({
      idempotent: true,
      retry: {
        maxInFlightRequests: 1,
      }
    });
    await this.consumer.connect();
    await this.producer.connect();
    await this.consumer.subscribe({
      topic: 'my-topic',
      fromBeginning: true,
    });
    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          partition,
          offset: message.offset,
          value: message.value.toString(),
        });

        let transaction: Transaction | undefined;

        try {
          transaction = await this.producer.transaction();
          await transaction.sendOffsets({
            consumerGroupId: 'my-group',
            topics: [{
              topic: 'my-topic',
              partitions: [{
                partition: 0,
                offset: message.offset.toString(),
              }]
            }],
          });
          await transaction.commit();
        } catch (e) {
          if (!transaction) {
            console.log(e);
          } else {
            await transaction.abort();
          }
        }
      },
      autoCommit: false,
    });
  }
}
