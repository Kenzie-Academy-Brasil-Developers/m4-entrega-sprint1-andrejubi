import listProfileService from "../services/listProfile.service";

const listProfileController = (req, res) => {
  const { id } = req.params;

  const listProfile = listProfileService(id);

  return res.json(listProfile);
};

export default listProfileController;
