import bodyParser, { urlencoded } from 'body-parser';
import express, { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();

app.use(bodyParser, urlencoded({ extended: true }));

app.use('/add-product', (req: Request, res: Response, next: NextFunction) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="product"/><button type="submit">Add Product</button></form>'
  );
});
app.use('/product', (req: Request, res: Response, next: NextFunction) => {
  res.send(req.body);
});
app.listen(3000);
