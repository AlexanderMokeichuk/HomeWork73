const express = require('express');
const app = express();

const port = 8000;
const localhost = `http://localhost:${port}`;

const Vigenere = require('caesar-salad').Vigenere;
const password = "LettersOnly";

const styleCSS = (
  "display: flex;" +
  "flex-direction: column;" +
  "justify-content: center;" +
  " align-items: center;"
)

const createHtmlElement = (event, route) => {
  return `<div style="${styleCSS}">
            <h1>${event}</h1>
            <button type="button">
              <a href="${localhost}/${route}/${event}">
                ${route.toUpperCase()}
              </a>
            </button>
       </div>`
};

app.get('/', (req, res) => {
  res.send("<h1>Hello, world!!</h1>");
});

app.get('/:message', (req, res) => {
  res.send(`<h1>Hello, ${req.params.message}!!</h1>`);
});

app.get('/encode/:route', (req, res) => {
  const encodedRoute = Vigenere.Cipher(password).crypt(req.params.route);
  res.send(createHtmlElement(encodedRoute, "decode"));
});

app.get('/decode/:route', (req, res) => {
  const decodedRoute = Vigenere.Decipher(password).crypt(req.params.route);
  res.send(createHtmlElement(decodedRoute, "encode"));
});


app.listen(port, () => {
  console.log(`Server running at ${localhost}`);
});