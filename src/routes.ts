import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { validateSchema } from "./middlewares/validateSchema";
import { createUserSchema, authUserSchema } from "./schemas/userSchema";
import { AuthUserController } from "./controllers/user/authUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { IsAuthenticated } from "./middlewares/IsAuthenticated";

const router = Router();

// Rotas Users
router.post(
  "/users",
  validateSchema(createUserSchema),
  new CreateUserController().handle
);

router.post("/session" , validateSchema(authUserSchema), new AuthUserController().handle)

router.get("/me" , IsAuthenticated , new DetailUserController().handle)
export { router };
