import express from "express";
import morgan from "morgan";
import cors from "cors";
import businessRouter from "./routes/business.js";
import itemRouter from "./routes/item.js";
import itemListRouter from "./routes/itemList.js";
import authRouter from "./routes/user.js";
import productTypeRouter from "./routes/product-types.js";
import setupJWTStrategy from "./auth/index.js";
import passport from "passport";

export default function createServer() {
  const app = express();

  app.use(cors());

  app.use(express.json());

  app.use(morgan("tiny"));

  setupJWTStrategy(passport);

  app.use("/business", businessRouter(passport));
  app.use("/item", itemRouter(passport));
  app.use("/itemList", itemListRouter(passport));
  app.use("/user", authRouter);
  app.use("/product-type", productTypeRouter);

  return app;
}
