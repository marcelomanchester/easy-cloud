module.exports = (req, res, next) => {
    try {
        next();
    } catch (error) {
        res.status(401).send({
            error: 'Not authorized to access this resource',
        });
    }
};
