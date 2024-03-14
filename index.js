const express = require('express');
const app = express();

const port = 8000;
const localhost = `http://localhost:${port}`;

const Vigenere = require('caesar-salad').Vigenere;
const password = "LettersOnly";


app.get('/', (req, res) => {
  res.send("<h1>Hello, world!!</h1>");
});

app.get('/:message', (req, res) => {
  res.send(`<h1>Hello, ${req.params.message}!!</h1>`);
});

app.listen(port, () => {
  console.log(`Server running at ${localhost}`);
});