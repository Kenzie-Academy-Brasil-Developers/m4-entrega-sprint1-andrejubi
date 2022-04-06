import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import users from "../database";

const verifyAuthTokenAdmMiddleware = (req, res, next) => {
  let token = req.headers.authorization;
  const decoded = jwt_decode(token);
  const actualUser = users.find((user) => user.email === decoded.email);

  if (!token) {
    return res.status(401).json({ message: "Missing authorization headers" });
  } else if (actualUser.isAdm === false) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: `Invalid Token` });
    }
    next();
  });
};

export default verifyAuthTokenAdmMiddleware;
