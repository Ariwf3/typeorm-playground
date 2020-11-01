import {MigrationInterface, QueryRunner} from "typeorm";

export class addUserAndTweet1604190004662 implements MigrationInterface {
    name = 'addUserAndTweet1604190004662'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` varchar(36) NOT NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `age` int NOT NULL, `role` int NOT NULL, UNIQUE INDEX `IDX_58e4dbff0e1a32a9bdc861bb29` (`firstName`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `tweet` (`id` varchar(36) NOT NULL, `title` varchar(80) NOT NULL, `content` varchar(300) NOT NULL, `userId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `tweet` ADD CONSTRAINT `FK_a9703cf826200a2d155c22eda96` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `tweet` DROP FOREIGN KEY `FK_a9703cf826200a2d155c22eda96`");
        await queryRunner.query("DROP TABLE `tweet`");
        await queryRunner.query("DROP INDEX `IDX_58e4dbff0e1a32a9bdc861bb29` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
