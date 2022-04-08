import users from "../database";

const listProfileService = (email) => {
  const profileUser = users.find((user) => user.email == email);

  return profileUser;
};

export default listProfileService;
