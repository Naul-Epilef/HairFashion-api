import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableProvider1623812439916 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "providers",
        foreignKeys: [
          {
            columnNames: ["users_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
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
            name: "users_id",
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
    await queryRunner.dropTable("providers");
  }
}
