const UserDao = require('../dao/user');

const find = (req, res) => {
    const data = {
        filter: {
            id: req.params.id,
        },
        meta: {},
    };

    UserDao.find(data, (resp) => res.send(resp));
};

module.exports = {
    find: find,
};
