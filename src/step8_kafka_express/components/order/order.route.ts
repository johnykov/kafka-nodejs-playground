import { Express } from 'express'

export function orderRoute(app: Express){
  app.get('/order',function(req,res){
    res.send('/order1 called successfully...');
  });
}
