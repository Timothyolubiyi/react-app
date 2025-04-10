'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1> welcome to my world of cloud computing with different opportunities </h1>');
});
app.get('/next', function (req, res) {
    res.send('{ "response": "yes this is the next page,please register your account"}');
});
app.get('/ok', function (req, res) {
    res.send('{ "response": " Nice Job!, cool job and welldone!" }');

app.get('/register', function (req, res) {
     res.send('{ "response": " Welcome to our registered page!" }');
});


});
app.listen(PORT, HOST);
console.log(`Server Running on http://${HOST}:${PORT}`);