import { UpdateResult } from "typeorm";
import ApiError from "../../models/ApiError";

import AppointmentRepository from "../../repositories/Appointment";
import ReturnProvider from "../Provider/ReturnProvider";

interface Request {
  id: string;
  date: string;
  providerId: string;
}

export default class UpdateAppointment {
  public async exec({ id, date, providerId }: Request): Promise<UpdateResult> {
    const appointmentRepository = new AppointmentRepository().exec();

    const provider = await new ReturnProvider().byId({ id: providerId });

    const appointment = await appointmentRepository.update(id, {
      date,
      provider,
    });

    if (!appointment) {
      throw new ApiError({
        status: 400,
        message: "Não foi possível alterar o agendamento",
      });
    }

    return appointment;
  }
}
