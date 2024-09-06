import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIndexForRefreshToken1725623381447 implements MigrationInterface {
    name = 'AddIndexForRefreshToken1725623381447'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE INDEX "IDX_4f72c6f8f8090cc76b31be8578" ON "refresh_tokens" ("refreshToken", "deviceId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_4f72c6f8f8090cc76b31be8578"`);
    }

}
