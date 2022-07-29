const { Pokemon } = require('../db/sequelize')
  
module.exports = (app) => {
  app.put('/api/pokemons/:id', (req, res) => {
    const id = req.params.id;
    Pokemon.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return Pokemon.findByPk(id).then(pokemon => {
        if(Pokemon === null){
          const message = "Le pokémon démandé n'existe pas. Réessayez avec un autre identifiant.";
          res.status(404).json({message})
        }
        const message = `Le pokémon ${pokemon.name} a bien été modifié.`;
        res.json({message, data: pokemon })
      })
    })
    .catch(error =>{
      const message = "Le pokémon n'a pas pu être modifié. Réessayez dans quelques instant.";
      res.status(500).json({message, data: error})
    })
  });
}