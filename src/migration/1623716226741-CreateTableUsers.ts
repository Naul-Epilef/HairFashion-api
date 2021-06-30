import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUsers1623716226741 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            isUnique: true,
            isNullable: false,
            generationStrategy: "uuid",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "pass",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "level",
            type: "varchar",
            default: "'Cliente'",
            isNullable: false,
            comment: "Esteticista | Cliente",
          },
          {
            name: "deleted",
            type: "boolean",
            default: false,
          },
          {
            name: "createdAt",
            type: "timestamp",
          },
          {
            name: "updatedAt",
            type: "timestamp",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
