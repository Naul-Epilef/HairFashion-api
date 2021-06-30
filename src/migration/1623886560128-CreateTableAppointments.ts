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
            columnNames: ["client"],
            referencedColumnNames: ["id"],
            referencedTableName: "clients",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
          },
          {
            columnNames: ["provider"],
            referencedColumnNames: ["id"],
            referencedTableName: "providers",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
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
            type: "datetime",
            isNullable: false,
          },
          {
            name: "client",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "provider",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "canceled",
            type: "boolean",
            default: false,
          },
          {
            name: "createdAt",
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
