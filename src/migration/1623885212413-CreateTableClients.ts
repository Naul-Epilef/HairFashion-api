import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableClients1623885212413 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "clients",
        foreignKeys: [
          {
            columnNames: ["user"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
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
            name: "user",
            type: "varchar",
            isNullable: false,
            isUnique: true,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("clients");
  }
}
