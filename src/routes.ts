import { Router } from "express";
import multer from 'multer';
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
import { createProductSchema, listProductSchema, listProductByCategorySchema} from "./schemas/productSchema";
import { ListProductByCategoryController } from "./controllers/product/ListProductByCategoryController";
import { ListProductController } from "./controllers/product/ListProductController";
import { DeleteProductController } from "./controllers/product/DeleteProductController";
import { createOrderSchema } from "./schemas/orderSchema";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import {ListOrdersController} from "./controllers/order/ListOrdersController";
import { AddItemController } from "./controllers/order/AddItemController";
import { addItemSchema } from "./schemas/orderSchema";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { removeItemSchema } from "./schemas/orderSchema";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { detailOrderSchema } from "./schemas/orderSchema";
import { sendOrderSchema } from "./schemas/orderSchema";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";
import { finishOrderSchema } from "./schemas/orderSchema";
import { DeleteOrderController } from "./controllers/order/DeleteOrderController";
import { deleteOrderSchema } from "./schemas/orderSchema";

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

router.delete("/product", IsAuthenticated, IsAdmin, new DeleteProductController().handle);

router.get("/category/product", IsAuthenticated, validateSchema(listProductByCategorySchema), new ListProductByCategoryController().handle);

router.post("/order", IsAuthenticated, validateSchema(createOrderSchema), new CreateOrderController().handle);

router.delete("/order", IsAuthenticated, validateSchema(deleteOrderSchema), new DeleteOrderController().handle);

router.get("/orders", IsAuthenticated, new ListOrdersController().handle);

router.post("/order/add", IsAuthenticated, validateSchema(addItemSchema), new AddItemController().handle);

router.delete("/order/remove", IsAuthenticated, validateSchema(removeItemSchema), new RemoveItemController().handle);

router.get("/order/detail", IsAuthenticated, validateSchema(detailOrderSchema), new DetailOrderController().handle);

router.put("/order/send", IsAuthenticated, validateSchema(sendOrderSchema), new SendOrderController().handle);

router.put("/order/finish", IsAuthenticated, validateSchema(finishOrderSchema), new FinishOrderController().handle);


export { router };
