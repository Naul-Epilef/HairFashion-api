import { getRepository, Repository } from "typeorm";

import Appointment from "../models/appointment";

export default class AppointmentRepository {
  public exec(): Repository<Appointment> {
    return getRepository(Appointment);
  }
}
