const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodeToken = jwt.verify(token, 'RANDOM_TOKEN');
    const userId = decodeToken.userId;

    if (req.body.userId && req.body.userId !== userId) {
      throw 'User Id Not Working!';
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({ error: error | 'Request not authenticated' });
  }
};
