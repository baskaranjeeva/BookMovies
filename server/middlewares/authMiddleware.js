const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verifiedToken = jwt.verify(token, "scaler_movies");
    console.log(verifiedToken);
    req.body.userId = verifiedToken.userId;
    next();
  } catch (error) {
    console.log(error);
  }
};
