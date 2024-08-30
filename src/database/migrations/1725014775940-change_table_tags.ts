import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeTableTags1725014775940 implements MigrationInterface {
    name = 'ChangeTableTags1725014775940'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags" ADD CONSTRAINT "UQ_d90243459a697eadb8ad56e9092" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags" DROP CONSTRAINT "UQ_d90243459a697eadb8ad56e9092"`);
    }

}
