const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    define: {
        timestamps: false
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully!");
        // User.create({
        //     firstName: 'Saigal',
        //     lastName: 'Amatya'
        // });
    })
    .catch(err => {
        console.log("Unable to connect to the database!", err);
    });

// Connection using URI
// const sequelize = new Sequelize('mysql://root:root@localhost:3306/mysql_db');

module.exports = sequelize;
// module.exports = Sequelize;
