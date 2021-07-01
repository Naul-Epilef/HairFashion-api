import express from "express";

import GetUser from "../services/User/Get";
import UpdateUser from "../services/User/Update";

const routes = express();

// Get user
routes.get("/:id", async (req, res) => {
  const { id } = req.params;

  const user = await new GetUser().exec({ id });

  res.json(user);
});

// Update user
routes.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, pass, level } = req.body;

  const user = await new UpdateUser().exec({ id, name, email, pass, level });

  res.json(user);
});

export default routes;
