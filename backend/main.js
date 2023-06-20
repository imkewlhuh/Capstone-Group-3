import createServer from "./server.js";

const server = createServer();

const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log("App is listening at https://capstone-group-3-production.up.railway.app");
});