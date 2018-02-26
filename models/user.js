const sequelize = require('../db/mysql-db');
const Sequelize = require('sequelize');

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

// force: true will drop the table if it already exists
// User.sync({force: true}).then(() => {

    // return User.create({
    //     firstName: 'John',
    //     lastName: 'Doe'
    // });

// });

module.exports = User;