import listProfileService from "../services/listProfile.service";
import jwt from "jsonwebtoken";
import users from "../database";

const listProfileController = (req, res) => {
  let token = req.headers.authorization;

  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decode) => {
    const { email } = decode;
    const listProfile = listProfileService(email);
    return res.json(listProfile);
  });
};

export default listProfileController;
