import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1786087042462 implements MigrationInterface {
    name = 'NewMigration1786087042462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_317b86154bca256bdf5432f134\` ON \`students\``);
        await queryRunner.query(`ALTER TABLE \`students\` DROP COLUMN \`phone\``);
        await queryRunner.query(`ALTER TABLE \`students\` ADD \`phone\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` ADD UNIQUE INDEX \`IDX_317b86154bca256bdf5432f134\` (\`phone\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`students\` DROP INDEX \`IDX_317b86154bca256bdf5432f134\``);
        await queryRunner.query(`ALTER TABLE \`students\` DROP COLUMN \`phone\``);
        await queryRunner.query(`ALTER TABLE \`students\` ADD \`phone\` int NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_317b86154bca256bdf5432f134\` ON \`students\` (\`phone\`)`);
    }

}
