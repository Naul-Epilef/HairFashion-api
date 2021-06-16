import express from "express";

import CreateUser from "../services/Users/Create";
import DeleteUser from "../services/Users/DeleteUser";
import GetUser from "../services/Users/GetUser";
import ListUsers from "../services/Users/ListUser";
import UpdateUser from "../services/Users/UpdateUser";

const routes = express();

// List all
routes.get("/", async (req, res) => {
  const listUsers = await new ListUsers().exec();

  res.json(listUsers);
});

// Get user
routes.get("/:id", async (req, res) => {
  const { id } = req.params;

  const user = await new GetUser().exec({ id });

  res.json(user);
});

// Create
routes.post("/", async (req, res) => {
  const { name, email, pass, level } = req.body;

  const newUser = await new CreateUser().exec({ name, email, pass, level });

  res.json(newUser);
});

// Update user
routes.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, pass, level } = req.body;

  const user = await new UpdateUser().exec({ id, name, email, pass, level });

  res.json(user);
});

// Delete user
routes.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const isDeleted = await new DeleteUser().exec({ id });

  res.json({ isDeleted });
});

export default routes;
