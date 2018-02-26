const express = require('express');
const users = require('./models/user');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const sequelize = require('./db/mysql-db');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', routes);

// User.findAll().then(users => {
//     console.log("Find users: " + users);
// });

app.listen(3030, () => {
    // console.log("App is running on 3030");
    
});