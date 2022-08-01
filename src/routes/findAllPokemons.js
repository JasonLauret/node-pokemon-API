const { Pokemon } = require('../db/sequelize');
const { Op } = require('sequelize');

module.exports = (app) => {
  app.get('/api/pokemons', (req, res) => {
    if(req.query.name){
      const name = req.query.name;
      return Pokemon.findAll({ 
        where:{ 
          name: { // <- 'name' est la propriété du modèle pokémon
            [Op.eq]: name // <- 'name' est le critère de la recherche
          }
        } 
      })
      .then(pokemons => {
        const message = `Il y a ${pokemons.length} pokémon qui correspond au terme de recherche ${name}.`;
        res.json({ message, data: pokemons })
      })
    } else {
      Pokemon.findAll()
      .then(pokemons => {
        const message = 'La liste des pokémons a bien été récupérée.'
        res.json({ message, data: pokemons })
      })
      .catch(error =>{
        const message = "La liste des pokémon n'a pas pu être récupérée. Réessayez dans quelques instant.";
        res.status(500).json({message, data: error})
      })
    }
  });
}