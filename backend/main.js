import createServer from "./server.js";
import { baseURL } from "../frontend/src/api/constants.js"

const server = createServer();

const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log(`App is listening at ${baseURL}`);
});