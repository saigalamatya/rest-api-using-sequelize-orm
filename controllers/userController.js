const router = require('express').Router();

const UserService = require('../services/userService');

let userService = new UserService();

// router.post('/users', (req, res) => {
//     userService.createUser(req.body).
// });

router.get('/', (req, res) => {
    userService.getUser().then((user) => {
        res.status(200).json(user);
    }).catch((err) => {
        res.status(500).json(err);
    });

});

router.post('/', (req, res) => {
    console.log(req.body);
    userService.createUser(req.body).then((user) => {   
        res.status(200).json(user);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

module.exports = router;