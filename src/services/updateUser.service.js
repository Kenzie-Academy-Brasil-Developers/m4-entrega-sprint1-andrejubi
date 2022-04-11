import users from "../database";

const updateUserService = (id, name, email) => {
  const updateUser = {
    id,
    name,
    email,
    updatedOn: new Date(),
  };

  const userIndex = users.findIndex((element) => element.id === id);

  if (userIndex === -1) {
    return "User not found";
  }

  users[userIndex] = { ...users[userIndex], ...updateUser };

  const visualUser = {
    name,
    email,
    isAdm: users[userIndex].isAdm,
    createdOn: users[userIndex].createdOn,
    updatedOn: users[userIndex].updatedOn,
    id: users[userIndex].id,
  };

  return visualUser;
};

export default updateUserService;
