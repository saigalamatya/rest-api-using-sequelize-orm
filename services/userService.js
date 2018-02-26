const User = require('../models/user');

class UserService {

    createUser(user) {
        return User.create({
            firstName: user.firstName,
            lastName: user.lastName
        });
    }

    getUser() {
        return User.findAll();
    }

}

module.exports = UserService;


