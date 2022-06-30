import bodyParser, { urlencoded } from 'body-parser';
import express, { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/add-product', (req: Request, res: Response, next: NextFunction) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="product"/><button type="submit">Add Product</button></form>'
  );
});
app.use('/product', (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  res.send(req.body.product);
});

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Listening on this route');
});
app.listen(3000, 'localhost', () => console.log(`listening`));
