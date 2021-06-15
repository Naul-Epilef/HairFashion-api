import express from "express";

import userRoutes from "./users.routes";

const routes = express();

routes.use("/users", userRoutes);

export default routes;
