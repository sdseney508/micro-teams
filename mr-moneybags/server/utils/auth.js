const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'moneybags';
const expiration = '2h';

module.exports = {
  // function for our authenticated routes
  authMiddleware: function ( req, res, next ) {
    // allows token to be sent via  req.query or headers
    // Added tokens to be sent via req.body as well
    let token = req.query.token || req.body.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return res.status(400).json({ message: 'You have no token!' });
    }

    // verify token and get user data out of it
    try {
      console.log('verifying token');
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
      return res.status(400).json({ message: 'invalid token!' });
    }

    // send to next endpoint
    next();
  },
  signToken: function ({ email, _id }) {
    console.log('token has been signed m-Lord!')
    const payload = { email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
