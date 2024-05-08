import { Express } from 'express'

export function userRoute(app: Express){
  app.get('/user',function(req,res){
    res.send('/user called successfully...');
  });
}
