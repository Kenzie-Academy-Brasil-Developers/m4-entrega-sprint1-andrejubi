import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import users from "../database";

const verifyAdmUptadeMiddlewares = (req, res, next) => {
  let token = req.headers.authorization;
  const { id } = req.params;
  const decoded = jwt_decode(token);
  const actualUser = users.find((user) => user.email === decoded.email);
  const updateUser = users.find((user) => user.id === id);

  if (!token) {
    return res.status(401).json({ message: "Missing authorization headers" });
  } else if (actualUser.isAdm === false) {
    if (actualUser !== updateUser) {
      return res.status(401).json({ message: "Missing admin permissions" });
    }
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: `Invalid Token` });
    }
    next();
  });
};

export default verifyAdmUptadeMiddlewares;
