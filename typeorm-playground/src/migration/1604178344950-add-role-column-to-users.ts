import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addRoleColumnToUsers1604178344950 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const userTable = await queryRunner.getTable('user');
        const roleColumn = new TableColumn({ name: "role", type: "int"})
        await queryRunner.addColumn(userTable, roleColumn)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const userTable = await queryRunner.getTable('user');
        await queryRunner.dropColumn(userTable, "role")
    }

}
