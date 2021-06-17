import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableAppointments1623886560128
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "appointments",
        foreignKeys: [
          {
            columnNames: ["providers_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "providers",
          },
          {
            columnNames: ["clients_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "clients",
          },
        ],
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "date",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "clients_id",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "providers_id",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "canceled_at",
            type: "datetime",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "datetime",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("appointments");
  }
}
