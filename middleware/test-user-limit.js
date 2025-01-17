const BadRequestError = require('../errors/bad-request');

const testUser = (req, res, next) => {
    if (req.user.testUser) {
        throw new BadRequestError('Test user read only!');
    }
    next();
}

module.exports = testUser