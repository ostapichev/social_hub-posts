import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeTableArticles1725488771998 implements MigrationInterface {
    name = 'ChangeTableArticles1725488771998'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" ADD "title" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "title"`);
    }

}
