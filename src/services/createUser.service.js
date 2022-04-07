import users from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bycrypt from "bcryptjs";

const createUserService = async (email, name, password, isAdm) => {
  const hashedPassword = await bycrypt.hash(password, 10);
  const date = new Date();

  const newUser = {
    name,
    email,
    password: hashedPassword,
    isAdm,
    createdOn: date,
    updatedOn: date,
    id: uuidv4(),
  };

  const visualUser = {
    name,
    email,
    isAdm,
    createdOn: date,
    updatedOn: date,
    id: newUser.id,
  };

  users.push(newUser);

  return visualUser;
};

export default createUserService;
