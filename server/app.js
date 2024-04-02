import express from "express";
import routes from "./src/routes/index.routes.js";

const app = express();

app.use(routes);

export default app; // Export the app instance
