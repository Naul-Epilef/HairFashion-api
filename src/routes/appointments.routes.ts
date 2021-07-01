import express from "express";

import CreateAppointment from "../services/Appointment/Create";
import ListAppointment from "../services/Appointment/List";
import CancelAppointment from "../services/Appointment/Cancel";
import UncancelAppointment from "../services/Appointment/Uncancel";
import Update from "../services/Appointment/Update";

const routes = express();

routes.post("/", async (req, res) => {
  const { clientId, providerId, date } = req.body;

  await new CreateAppointment().exec({
    clientId,
    providerId,
    date,
  });

  res.json({ status: 200, message: "Agendamento criado com sucesso!" });
});

routes.get("/list", async (req, res) => {
  const appointments = await new ListAppointment().all({});

  res.json(appointments);
});

routes.post("/clients/list", async (req, res) => {
  const { clientId } = req.body;

  const appointments = await new ListAppointment().byClient({ clientId });

  res.json(appointments);
});

routes.post("/providers/list", async (req, res) => {
  const { providerId } = req.body;

  const appointments = await new ListAppointment().byProvider({ providerId });

  res.json(appointments);
});

routes.post("/cancel/:id", async (req, res) => {
  const { id } = req.params;

  const appointment = await new CancelAppointment().exec({ id });

  res.json(appointment);
});

routes.post("/uncancel/:id", async (req, res) => {
  const { id } = req.params;

  const appointment = await new UncancelAppointment().exec({ id });

  res.json(appointment);
});

routes.post("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { date, providerId } = req.body;

  const appointment = await new Update().exec({ id, date, providerId });

  res.json(appointment);
});

export default routes;
