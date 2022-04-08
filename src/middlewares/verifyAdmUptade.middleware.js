import jwt from "jsonwebtoken";
import users from "../database";

const verifyAdmUptadeMiddlewares = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }

  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: `Invalid Token` });
    } else {
      const { id } = req.params;
      const updateUser = users.find((user) => user.id === id);
      console.log(decoded, updateUser);
      if (decoded.isAdm === false) {
        if (decoded !== updateUser) {
          return res.status(401).json({ message: "Missing admin permissions" });
        }
      }
    }
    next();
  });
};

export default verifyAdmUptadeMiddlewares;
