import deleteUserService from "../services/deleteUser.service";
import jwt from "jsonwebtoken";

const deleteUserController = (req, res) => {
  let token = req.headers.authorization;

  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decode) => {
    const { email } = decode;
    const deleteUser = deleteUserService(email, res);

    return res.json(deleteUser);
  });
};

export default deleteUserController;
