const express = require('express');

const app = express();
const port = 4000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.warn(`Listening at http://localhost:${port}`);
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
});
