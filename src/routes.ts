import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { validateSchema } from "./middlewares/validateSchema";
import { createUserSchema, authUserSchema } from "./schemas/userSchema";
import { AuthUserController } from "./controllers/user/authUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { IsAuthenticated } from "./middlewares/IsAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController"
import { IsAdmin } from "./middlewares/IsAdmin";


const router = Router();

// Rotas Users
router.post(
  "/users",
  validateSchema(createUserSchema),
  new CreateUserController().handle
);

router.post("/session" , validateSchema(authUserSchema), new AuthUserController().handle)

router.get("/me" , IsAuthenticated , new DetailUserController().handle)

router.post("/category" , IsAuthenticated , IsAdmin , new CreateCategoryController().handle)

export { router };
