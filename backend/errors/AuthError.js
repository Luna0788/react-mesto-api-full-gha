const {
  UNAUTHORIZED_CODE,
} = require('../utils/constants');

class AuthError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = UNAUTHORIZED_CODE;
  }
}
module.exports = AuthError;
