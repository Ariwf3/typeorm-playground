import {MigrationInterface, QueryRunner} from "typeorm";

export class changeUuidToIncrementId1604190345333 implements MigrationInterface {
    name = 'changeUuidToIncrementId1604190345333'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `tweet` DROP FOREIGN KEY `FK_a9703cf826200a2d155c22eda96`");
        await queryRunner.query("ALTER TABLE `user` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `user` ADD `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `tweet` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `tweet` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `tweet` ADD `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `tweet` DROP COLUMN `userId`");
        await queryRunner.query("ALTER TABLE `tweet` ADD `userId` int NULL");
        await queryRunner.query("ALTER TABLE `tweet` ADD CONSTRAINT `FK_a9703cf826200a2d155c22eda96` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `tweet` DROP FOREIGN KEY `FK_a9703cf826200a2d155c22eda96`");
        await queryRunner.query("ALTER TABLE `tweet` DROP COLUMN `userId`");
        await queryRunner.query("ALTER TABLE `tweet` ADD `userId` varchar(36) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `tweet` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `tweet` ADD `id` varchar(36) NOT NULL");
        await queryRunner.query("ALTER TABLE `tweet` ADD PRIMARY KEY (`id`)");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `user` ADD `id` varchar(36) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD PRIMARY KEY (`id`)");
        await queryRunner.query("ALTER TABLE `tweet` ADD CONSTRAINT `FK_a9703cf826200a2d155c22eda96` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
