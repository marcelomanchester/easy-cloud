const User = require('../db').models.user;

const find = (data, callback) => {
    const filter = data.filter;
    const meta = data.meta;

    User.findByPk(filter.id)
        .then((resp) => {
            callback({
                status: 'success',
                data: resp,
            });
        })
        .catch((error) => {
            callback({
                status: 'error',
                code: error,
            });
        });
};

module.exports = {
    find: find,
};
