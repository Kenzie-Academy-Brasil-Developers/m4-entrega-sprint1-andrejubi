import deleteUserService from "../services/deleteUser.service";

const deleteUserController = (req, res) => {
  const { id } = req.params;

  const deleteUser = deleteUserService(id, res);

  return res.json(deleteUser);
};

export default deleteUserController;
