import express from 'express';
import morgan from 'morgan';
const app = express();
import { sum } from './math/index.js';

app.use(morgan('combined'));

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!!!' + sum(10, 20));
});

app.get('/health', (req, res) => {
  res.send('I am good!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
