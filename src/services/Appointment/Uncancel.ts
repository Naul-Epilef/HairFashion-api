import { UpdateResult } from "typeorm";
import ApiError from "../../models/ApiError";

import AppointmentRepository from "../../repositories/Appointment";

interface Request {
  id: string;
}

export default class UncancelAppointment {
  public async exec({ id }: Request): Promise<UpdateResult> {
    const appointmentRepository = new AppointmentRepository().exec();

    const appointment = await appointmentRepository.update(id, {
      canceled: false,
    });

    const affected = appointment.affected as number;

    if (affected == 0) {
      await appointmentRepository.update(id, { canceled: false });
      throw new ApiError({
        status: 400,
        message: "Não foi possível renovar o agendamento!",
      });
    } else if (affected > 1) {
      await appointmentRepository.update(id, { canceled: false });
      throw new ApiError({
        status: 400,
        message:
          "Ocorreu um erro, entre em contato com o suporte para resolver!",
      });
    }

    return appointment;
  }
}
