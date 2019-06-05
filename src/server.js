// server.js
import express from 'express';
import connection from './helpers/db_conn';

const client = connection();
client.connect();

// client.connect();
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json('Welcome to MindMirror');
});

app.get('/now', async (req, res) => {
  const query='SELECT NOW()';
  const result = await client.query(query);
  res.status(200).json({now: result.rows[0].now });
});

app.listen(3001);

/* eslint-disable-next-line */
console.log('app running on port ', 3001);

export default app;
