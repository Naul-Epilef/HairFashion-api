import express from "express";
import "reflect-metadata";

import connection from "./config/db";
import routes from "./routes";

const validateConnection = () => {
  connection
    .then(() => {
      const app = express();
      const port = 3333;

      app.use(express.json());
      app.use(routes);

      app.listen(port, () => {
        console.log(`URL http://localhost:${port}`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

validateConnection();
