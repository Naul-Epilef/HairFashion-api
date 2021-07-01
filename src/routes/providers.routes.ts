import express from "express";

import CreateUser from "../services/User/Create";
import CreateProvider from "../services/Provider/Create";
import DeleteUser from "../services/User/Delete";
import RestoreUser from "../services/User/Restore";
import ListProviders from "../services/Provider/List";

const routes = express();

routes.get("/list", async (req, res) => {
  const users = await new ListProviders().exec();

  res.json({ users });
});

routes.post("/", async (req, res) => {
  const { name, email, pass } = req.body;

  const newUser = await new CreateUser().exec({
    name,
    email,
    pass,
    level: "Esteticista",
  });

  await new CreateProvider().exec({ user: newUser });

  res.json({ status: 200, message: "Esteticista criado com sucesso!" });
});

// Delete user
routes.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const userDeleted = await new DeleteUser().exec({ id });

  res.json({ userDeleted });
});

routes.put("/:id", async (req, res) => {
  const { id } = req.params;

  const userRestored = await new RestoreUser().exec({ id });

  res.json({ userRestored });
});

export default routes;
