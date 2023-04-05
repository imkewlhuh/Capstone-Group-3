import express from "express";
import morgan from "morgan";
import cors from "cors";
import businessRouter from "./routes/business.js";
import setupJWTStrategy from "./middlewares/auth.js";
import passport from "passport";

export default function createServer() {
    const app = express();
    app.use(cors())
    app.use(express.json());

    app.use(morgan("tiny"));

    setupJWTStrategy(passport);

    app.use("/business", businessRouter(passport));

    return app;
}