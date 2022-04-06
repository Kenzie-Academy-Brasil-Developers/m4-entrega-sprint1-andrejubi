import userLoginService from "../services/userLogin.service";

const userLoginController = (req, res) => {
  const { email, password } = req.body;

  const userLogin = userLoginService(email, password, res);

  return res.json(userLogin);
};

export default userLoginController;
