// server.js
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'Welcome to MindMirror'});
});

app.listen(3000);

/* eslint-disable-next-line */
console.log('app running on port ', 3000);
