import { Router } from "express";
import multer from 'multer';
//import uploadConfig from './config/multer';
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
import { CreateProductController } from "./controllers/product/CreateProductController";
import { createProductSchema, listProductSchema} from "./schemas/productSchema";
import { ListProductController } from "./controllers/product/ListProductController";
import { ListProductService } from "./services/product/ListProductService";

const router = Router();
const upload = multer();

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

router.post("/product", IsAuthenticated, IsAdmin, upload.single("file"), validateSchema(createProductSchema) , new CreateProductController().handle);

router.get("/products", IsAuthenticated, validateSchema(listProductSchema), new ListProductController().handle);

export { router };
