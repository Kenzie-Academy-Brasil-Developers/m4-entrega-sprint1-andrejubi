import users from "../database";

const listUsersService = () => {
  const visualUsers = [];
  users.map((user) => {
    const newVisualUser = {
      name: user.name,
      email: user.email,
      isAdm: user.isAdm,
      createdOn: user.createdOn,
      updatedOn: user.updatedOn,
      id: user.id,
    };
    visualUsers.push(newVisualUser);
  });

  return visualUsers;
};

export default listUsersService;
