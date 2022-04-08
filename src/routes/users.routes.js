import { Router } from "express";
import createUserController from "../controlers/createUser.controller";
import deleteUserController from "../controlers/deleteUser.controller";
import listUsersController from "../controlers/listUsers.controller";
import updateUserController from "../controlers/updateUser.controller";
import userLoginController from "../controlers/userLogin.controller";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyAuthTokenAdmMiddleware from "../middlewares/verifyAuthTokenAdm.middleware copy";
import listProfileController from "../controlers/listProfile.controller";
import verifyAdmUptadeMiddlewares from "../middlewares/verifyAdmUptade.middleware";

const router = Router();

router.post("", verifyEmailAvailabilityMiddleware, createUserController);
router.get("", verifyAuthTokenAdmMiddleware, listUsersController);
router.patch("/:id", verifyAdmUptadeMiddlewares, updateUserController);
router.delete("/:id", verifyAdmUptadeMiddlewares, deleteUserController);
router.post("/login", userLoginController);
router.get("/profile", verifyAuthTokenMiddleware, listProfileController);

export default router;
