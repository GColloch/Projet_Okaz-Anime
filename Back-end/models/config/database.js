const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nom_base_de_donnees', 'utilisateur', 'mot_de_passe', {
  host: 'localhost',
  dialect: 'mysql', // Remplacez par le dialecte approprié (mysql, postgres, etc.)
});

module.exports = sequelize;
