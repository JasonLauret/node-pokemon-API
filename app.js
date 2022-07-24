const express = require('express');
let pokemons = require('./mock-pokemon');

const app = express();
const port = 3000;

app.get('/', (req,res) => res.send('Hello again, Express !'));

app.get('/api/pokemon/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const pokemon = pokemons.find(pokemon => pokemon.id === id);
    res.send(`Vous avez demandez le pokémon ${pokemon.name}. !`);
});

app.listen(port,() => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`));