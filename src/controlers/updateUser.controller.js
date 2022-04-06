import updateUserService from "../services/updateUser.service";

const updateUserController = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const updateUser = updateUserService(id, name, email);

  return res.json(updateUser);
};

export default updateUserController;
