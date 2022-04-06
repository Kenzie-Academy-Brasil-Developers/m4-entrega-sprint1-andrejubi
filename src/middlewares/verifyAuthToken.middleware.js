import jwt from "jsonwebtoken";

const verifyAuthTokenMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing Authorization Token." });
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Invalid Token." });
    }

    next();
  });
};

export default verifyAuthTokenMiddleware;
