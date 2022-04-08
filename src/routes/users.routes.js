import { Router } from "express";

import createUserController from "../controlers/createUser.controller";
import deleteUserController from "../controlers/deleteUser.controller";
import listUsersController from "../controlers/listUsers.controller";
import updateUserController from "../controlers/updateUser.controller";
import userLoginController from "../controlers/userLogin.controller";
import listProfileController from "../controlers/listProfile.controller";

import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyAuthTokenAdmMiddleware from "../middlewares/verifyAuthTokenAdm.middleware copy";
import verifyAdmUptadeMiddlewares from "../middlewares/verifyAdmUptade.middleware";

const router = Router();

router.post("/users", verifyEmailAvailabilityMiddleware, createUserController);
router.get("/users", verifyAuthTokenAdmMiddleware, listUsersController);
router.patch("/users/:id", verifyAdmUptadeMiddlewares, updateUserController);
router.delete("/users/:id", verifyAdmUptadeMiddlewares, deleteUserController);
router.post("/login", userLoginController);
router.get("/profile", verifyAuthTokenMiddleware, listProfileController);

export default router;
