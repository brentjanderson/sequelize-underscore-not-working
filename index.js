const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',

});

const User = sequelize.define('user', {
  userName: Sequelize.STRING,
  birthDay: Sequelize.DATE
}, { underscored: true });

sequelize.sync({ force: true })
  .then(() => User.create({
    userName: 'janedoe',
    birthDay: new Date(1980, 6, 20)
  }))
  .then(() => {
    return sequelize.query('SELECT * FROM users')
  }).then(([resultSet]) => {
    console.log(resultSet);
    process.exit(0);
  });
