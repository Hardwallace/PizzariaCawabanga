import { Router } from "express";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { AuthUserController } from "./controllers/user/authUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { IsAdmin } from "./middlewares/IsAdmin";
import { IsAuthenticated } from "./middlewares/IsAuthenticated";
import { validateSchema } from "./middlewares/validateSchema";
import { createCategorySchema } from "./schemas/categorySchema";
import { authUserSchema, createUserSchema } from "./schemas/userSchema";

const router = Router();

router.post(
  "/users",
  validateSchema(createUserSchema),
  new CreateUserController().handle
);

router.post(
  "/session",
  validateSchema(authUserSchema),
  new AuthUserController().handle
);

router.get("/me", IsAuthenticated, new DetailUserController().handle);


router.post(
  "/category",
  IsAuthenticated,
  IsAdmin,
  validateSchema(createCategorySchema),
  new CreateCategoryController().handle
);

router.get("/category", IsAuthenticated, new ListCategoryController().handle);

export { router };
