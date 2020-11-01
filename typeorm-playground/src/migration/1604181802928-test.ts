import {MigrationInterface, QueryRunner} from "typeorm";

export class test1604181802928 implements MigrationInterface {
    name = 'test1604181802928'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `tweet` (`id` varchar(36) NOT NULL, `title` varchar(80) NOT NULL, `content` varchar(300) NOT NULL, `userId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `tweet` ADD CONSTRAINT `FK_a9703cf826200a2d155c22eda96` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `tweet` DROP FOREIGN KEY `FK_a9703cf826200a2d155c22eda96`");
        await queryRunner.query("DROP TABLE `tweet`");
    }

}
