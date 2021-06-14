import express from "express";

const routes = express();

routes.get("/", (req, res) => {
  res.json({ message: "Será??????" });
});

export default routes;
