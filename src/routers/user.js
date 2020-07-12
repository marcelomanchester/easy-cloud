const userController = require('../controllers/user');

const user = (router, auth) => {
    router.get('/users/:id', auth, (req, res) => userController.find(req, res));

    return router;
};

module.exports = user;
