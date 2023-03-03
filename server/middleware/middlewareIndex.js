var { expressjwt: jwt } = require("express-jwt");

exports.authSignIn = jwt({
  getToken: (req, res) => req.cookies.token,
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});
