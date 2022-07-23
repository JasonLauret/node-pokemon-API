const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req,res) => res.send('Hello again, Express !'));

app.get('/api/pokemon/1', (req,res) => res.send('Hello, Bulbizarre !'));

app.listen(port,() => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`));