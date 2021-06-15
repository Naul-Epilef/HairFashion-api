import express from "express";

import CreateUser from "../services/Users/Create";

const routes = express();

routes.post("/", async (req, res) => {
  const { name, email, pass, level } = req.body;

  const newUser = await new CreateUser().exec({ name, email, pass, level });

  res.json(newUser);
});

export default routes;
