import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1786427102784 implements MigrationInterface {
    name = 'NewMigration1786427102784'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Enrollments\` DROP COLUMN \`student_ id\``);
        await queryRunner.query(`ALTER TABLE \`Enrollments\` DROP FOREIGN KEY \`FK_e19db00ac712e9851b33036c7c3\``);
        await queryRunner.query(`ALTER TABLE \`Enrollments\` CHANGE \`student_id\` \`student_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Enrollments\` ADD CONSTRAINT \`FK_e19db00ac712e9851b33036c7c3\` FOREIGN KEY (\`student_id\`) REFERENCES \`students\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Enrollments\` DROP FOREIGN KEY \`FK_e19db00ac712e9851b33036c7c3\``);
        await queryRunner.query(`ALTER TABLE \`Enrollments\` CHANGE \`student_id\` \`student_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`Enrollments\` ADD CONSTRAINT \`FK_e19db00ac712e9851b33036c7c3\` FOREIGN KEY (\`student_id\`) REFERENCES \`students\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Enrollments\` ADD \`student_ id\` int NOT NULL`);
    }

}
