const validTypes = ["Plante", "Poison", "Feu", "Eau", "Insecte", "Vol", "Normal", "Electrik", "Fée"];

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Pokemon', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { 
          msg: "Le nom est déjà pris." 
        },
        validate: {
          notEmpty: { msg: "Le nom ne peut pas être vide." },
          notNull: { msg: "Le nom est une propriété requis." }
        }
      },
      hp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg: "Utilisez uniquement un nombre entier pour les points de vie." },
          min: {
            args:[0],
            msg: 'Le nombre des points de vie doit être superieur ou égale à 0.'
          },
          max: {
            args:[999],
            msg: 'Le nombre des points de vie doit être inferieur ou égale à 999.'
          },
          notNull: { msg: "Les points de vie sont une propriété requise." }
        }
      },
      cp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg: "Utilisez uniquement un nombre entier pour les points de dégats." },
          min: {
            args:[0],
            msg: 'Le nombre des points de dégats doit être superieur ou égale à 0.'
          },
          max: {
            args:[99],
            msg: 'Le nombre des points de dégats doit être inferieur ou égale à 99.'
          },
          notNull: { msg: "Les points de dégats sont une propriété requise." }
        }
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: { msg: "Utilisez uniquement une URL valide" },
          notNull: { msg: "L'image est une propriété requise" }
        }
      },
      types: {
        type: DataTypes.STRING,
        allowNull: false,
        get(){
            return this.getDataValue('types').split(',');
        },
        set(types){
            this.setDataValue('types', types.join());
        },
        validate: {
          isTypesValid(value){
            if(!value){
              throw new Error("Un pokémon doit au moins avoir un type.");
            } else if(value.split(',').length > 3){
              throw new Error("Un pokémon ne peux pas avoir plus de trois type.");
            }
            value.split(',').forEach(type => {
              if(!validTypes.includes(type)) {
                throw new Error(`Le type d'un pokémon doit appartenir à la liste suivant : ${validTypes}.`);
              }
            });
          }
        }
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
}