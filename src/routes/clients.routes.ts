import express from "express";

import ListClients from "../services/Client/List";
import CreateUser from "../services/User/Create";
import CreateClient from "../services/Client/Create";
import DeleteUser from "../services/User/Delete";
import RestoreUser from "../services/User/Restore";

const routes = express();

routes.get("/list", async (req, res) => {
  const users = await new ListClients().exec();

  res.json({ users });
});

routes.post("/", async (req, res) => {
  const { name, email, pass } = req.body;

  const newUser = await new CreateUser().exec({
    name,
    email,
    pass,
    level: "Cliente",
  });

  await new CreateClient().exec({ user: newUser });

  res.json({ status: 200, message: "Cliente criado com sucesso!" });
});

routes.delete("/:id", async (req, res) => {
  const { id } = req.params;

  await new DeleteUser().exec({ id });

  res.json({ status: 200, message: "Cliente excluído com sucesso!" });
});

routes.put("/:id", async (req, res) => {
  const { id } = req.params;

  await new RestoreUser().exec({ id });

  res.json({ status: 200, message: "O cliente foi restaurado com sucesso!" });
});

export default routes;
