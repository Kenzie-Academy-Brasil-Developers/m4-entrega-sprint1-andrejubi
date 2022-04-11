import users from "../database";

const listProfileService = (email) => {
  const profileUser = users.find((user) => user.email == email);

  const visualUser = {
    name: profileUser.name,
    email: profileUser.email,
    isAdm: profileUser.isAdm,
    createdOn: profileUser.createdOn,
    updatedOn: profileUser.updatedOn,
    id: profileUser.id,
  };

  return visualUser;
};

export default listProfileService;
