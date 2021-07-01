import express from "express";

import userRoutes from "./users.routes";
import appointmentsRoutes from "./appointments.routes";
import providersRoutes from "./providers.routes";
import clientsRoutes from "./clients.routes";

const routes = express();

routes.use("/users", userRoutes);
routes.use("/clients", clientsRoutes);
routes.use("/providers", providersRoutes);
routes.use("/appointments", appointmentsRoutes);

export default routes;
