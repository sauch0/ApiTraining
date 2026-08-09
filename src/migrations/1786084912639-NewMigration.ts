import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1786084912639 implements MigrationInterface {
    name = 'NewMigration1786084912639'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`students\` ADD UNIQUE INDEX \`IDX_25985d58c714a4a427ced57507\` (\`email\`)`);
        await queryRunner.query(`ALTER TABLE \`students\` ADD UNIQUE INDEX \`IDX_317b86154bca256bdf5432f134\` (\`phone\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`students\` DROP INDEX \`IDX_317b86154bca256bdf5432f134\``);
        await queryRunner.query(`ALTER TABLE \`students\` DROP INDEX \`IDX_25985d58c714a4a427ced57507\``);
    }

}
