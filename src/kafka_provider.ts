import { Kafka, logLevel } from 'kafkajs'

const isLocalhost = process.env.KAFKA_BROKERS!.includes('localhost')

export const kafka = new Kafka({
  brokers: [process.env.KAFKA_BROKERS!],
  ssl: !isLocalhost,
  ...(!isLocalhost && {
    sasl: {
      mechanism: 'scram-sha-256',
      username: process.env.KAFKA_USERNAME!,
      password: process.env.KAFKA_PASSWORD!,
    },
  }),
  logLevel: process.env.LOG_LEVEL ? logLevel.DEBUG : logLevel.ERROR,
});

export const topic = process.env.KAFKA_TOPIC! || 'polish_pageviews'

export const schemaRegistry = process.env.SCHEMA_REGISTRY!
