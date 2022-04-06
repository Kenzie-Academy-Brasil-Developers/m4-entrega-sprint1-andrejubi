import listUsersService from "../services/listUser.service";

const listUsersController = (req, res) => {
  const users = listUsersService();

  return res.json(users);
};

export default listUsersController;
