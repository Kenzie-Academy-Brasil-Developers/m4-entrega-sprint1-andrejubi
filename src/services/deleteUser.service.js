import users from "../database";

const deleteUserService = (id, res) => {
  const userIndex = users.findIndex((element) => element.id === id);

  if (userIndex === -1) {
    return "User not found";
  }

  users.splice(userIndex, 1);

  return res.status(200).json({ message: "User deleted with success" });
};

export default deleteUserService;
