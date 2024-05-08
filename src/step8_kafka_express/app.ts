import express from 'express'
import * as routes from './components/routes'
// npx tsx --watch src/app.ts

const app = express()
Object.values(routes).forEach(el => el(app))


app.listen(9123, ()=>{
  console.log(`Server is listening on ${9123}`);
});

// test: http :9123/user
// test: http :9123/order

// MAIN BENEFIT of below is REUSE-ABILITY, 

// simpler design
// usr.repository.ts
// usr.route.ts
// usr.entity.ts / usr.model.ts
// usr.validator.ts
// usr.schema.ts
// usr.cfg.ts
// usr.ctrl.ts
// usr.ctrl.test.ts - unit test
// usr.ctrl.spec.ts - integration test (with DB, MQ or pub/sub, fake email server)

// group in dirs:
// - data-access
// - domain
// - entry-points

//general app technicals
//src/libs/error-handling
//src/libs/conf-provider
//src/libs/validations
//src/libs/custom-middleware
//src/libs/logger
//src/libs/jwt-token
//src/libs/custom-request
