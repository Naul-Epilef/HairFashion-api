import Appointment from "../../models/appointment";
import AppointmentRepository from "../../repositories/Appointment";

interface all {
  filter?: string;
}

interface byClient {
  clientId: string;
}

interface byProvider {
  providerId: string;
}

export default class ListAppointment {
  public async all({ filter }: all): Promise<Appointment[]> {
    const appointmentRepository = new AppointmentRepository().exec();

    const appointments = await appointmentRepository
      .createQueryBuilder()
      .select(
        "appointments.id AS appointmentsId,appointments.date AS appointmentsDate,appointments.clientId AS appointmentsClientId,uc.name AS usersClientName,uc.email AS usersClientEmail,uc.pass AS usersClientPass,uc.level AS usersClientLevel,uc.createdAt AS usersClientCreatedAt,appointments.providerId AS appointmentsProviderId,up.name AS usersProviderName,up.email AS usersProviderEmail,up.pass AS usersProviderPass,up.level AS usersProviderLevel,up.createdAt AS usersProviderCreatedAt,appointments.canceled AS appointmentsCanceled,appointments.createdAt AS appointmentsCreatedAt"
      )
      .leftJoin("clients", "c", "c.id = appointments.clientId")
      .leftJoin("providers", "p", "p.id = appointments.providerId")
      .leftJoin("users", "uc", "uc.id = c.userId")
      .leftJoin("users", "up", "up.id = p.userId")
      .getRawMany();

    return appointments;
  }

  public async byClient({ clientId }: byClient): Promise<Appointment[]> {
    const appointmentRepository = new AppointmentRepository().exec();

    const appointments = await appointmentRepository
      .createQueryBuilder()
      .select(
        "appointments.id AS appointmentsId,appointments.date AS appointmentsDate,appointments.clientId AS appointmentsClientId,uc.name AS usersClientName,uc.email AS usersClientEmail,uc.pass AS usersClientPass,uc.level AS usersClientLevel,uc.createdAt AS usersClientCreatedAt,appointments.providerId AS appointmentsProviderId,up.name AS usersProviderName,up.email AS usersProviderEmail,up.pass AS usersProviderPass,up.level AS usersProviderLevel,up.createdAt AS usersProviderCreatedAt,appointments.canceled AS appointmentsCanceled,appointments.createdAt AS appointmentsCreatedAt"
      )
      .where("appointments.clientId = :clientId", { clientId })
      .leftJoin("clients", "c", "c.id = appointments.clientId")
      .leftJoin("providers", "p", "p.id = appointments.providerId")
      .leftJoin("users", "uc", "uc.id = c.userId")
      .leftJoin("users", "up", "up.id = p.userId")
      .getRawMany();

    return appointments;
  }

  public async byProvider({ providerId }: byProvider): Promise<Appointment[]> {
    const appointmentRepository = new AppointmentRepository().exec();

    const appointments = await appointmentRepository
      .createQueryBuilder()
      .select(
        "appointments.id AS appointmentsId,appointments.date AS appointmentsDate,appointments.clientId AS appointmentsClientId,uc.name AS usersClientName,uc.email AS usersClientEmail,uc.pass AS usersClientPass,uc.level AS usersClientLevel,uc.createdAt AS usersClientCreatedAt,appointments.providerId AS appointmentsProviderId,up.name AS usersProviderName,up.email AS usersProviderEmail,up.pass AS usersProviderPass,up.level AS usersProviderLevel,up.createdAt AS usersProviderCreatedAt,appointments.canceled AS appointmentsCanceled,appointments.createdAt AS appointmentsCreatedAt"
      )
      .where("appointments.providerId = :providerId", { providerId })
      .leftJoin("clients", "c", "c.id = appointments.clientId")
      .leftJoin("providers", "p", "p.id = appointments.providerId")
      .leftJoin("users", "uc", "uc.id = c.userId")
      .leftJoin("users", "up", "up.id = p.userId")
      .getRawMany();

    return appointments;
  }
}
