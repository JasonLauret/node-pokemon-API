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
        }
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
}