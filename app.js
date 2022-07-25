const express = require('express');
const morgan = require('morgan');
const {success} = require('./helper.js');
let pokemons = require('./mock-pokemon');

const app = express();
const port = 3000;

app.use(morgan('dev'));

app.get('/', (req,res) => res.send('Hello again, Express !'));

app.get('/api/pokemons/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const pokemon = pokemons.find(pokemon => pokemon.id === id);
    const message = 'Un pokémon a bien été trouvé.';
    res.json(success(message, pokemon));
});

app.get('/api/pokemons', (req,res) => {
    const message = 'La liste des pokémons a bien été récupéré';
    res.json(success(message, pokemons));
});

app.listen(port,() => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`));