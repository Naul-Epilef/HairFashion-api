import { v4 } from "uuid";

import Appointment from "../../models/appointment";
import AppointmentRepository from "../../repositories/Appointment";
import ReturnClient from "../Client/ReturnClient";
import ReturnProvider from "../Provider/ReturnProvider";

interface Request {
  clientId: string;
  providerId: string;
  date: string;
}

export default class CreateAppointment {
  public async exec({
    clientId,
    providerId,
    date,
  }: Request): Promise<Appointment> {
    const appointmentRepository = new AppointmentRepository().exec();

    const client = await new ReturnClient().byId({ id: clientId });

    const provider = await new ReturnProvider().byId({ id: providerId });

    const newAppointment = appointmentRepository.create({
      id: v4(),
      date,
      client,
      provider,
    });

    appointmentRepository.save(newAppointment);

    return newAppointment;
  }
}
