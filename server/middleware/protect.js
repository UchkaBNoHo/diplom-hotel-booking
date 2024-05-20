const jwt = require("jsonwebtoken");
const protect = (req, res, next) => {
  token = req.cookies.token;
  if (!token) {
    res.status(401).json({
      message: "ehleed nevterne uu!",
    });
  }
  try {
    const data = jwt.verify(token, "Uchka");
    req.userId = data.userId;
    next();
  } catch (error) {
    res.status(401).json({
      message: "token obso. dahiad nevterne uu!",
    });
  }
};
module.exports = protect;
