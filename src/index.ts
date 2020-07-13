import Express,{Request, Response} from 'express';

const app = Express();

app.get('/',(req:Request, res:Response) => {
  res.send('xxxx');
})

app.listen(8080,() => {
  console.error('start server success')
})