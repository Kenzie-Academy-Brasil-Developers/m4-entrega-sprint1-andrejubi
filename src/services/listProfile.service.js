import users from "../database";

const listProfileService = (id) => {
  const profileUser = users.find((user) => user.id == id);

  return profileUser;
};

export default listProfileService;
