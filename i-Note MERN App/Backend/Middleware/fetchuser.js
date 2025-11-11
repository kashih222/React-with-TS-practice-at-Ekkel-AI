const jwt = require('jsonwebtoken');
const JWT_SECRET = "yourSuperSecretKey";

const fetchuser = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    console.error("JWT verification failed:", error.message);
    res.status(401).json({ error: "Invalid token." });
  }
};

module.exports = fetchuser;
