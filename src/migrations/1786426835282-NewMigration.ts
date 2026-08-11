import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1786426835282 implements MigrationInterface {
    name = 'NewMigration1786426835282'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Enrollments\` (\`id\` int NOT NULL AUTO_INCREMENT, \`student_ id\` int NOT NULL, \`course_id\` int NOT NULL, \`student_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Enrollments\` ADD CONSTRAINT \`FK_e19db00ac712e9851b33036c7c3\` FOREIGN KEY (\`student_id\`) REFERENCES \`students\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Enrollments\` ADD CONSTRAINT \`FK_ea0ed7c2e8a0dd0595c663e211b\` FOREIGN KEY (\`course_id\`) REFERENCES \`courses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Enrollments\` DROP FOREIGN KEY \`FK_ea0ed7c2e8a0dd0595c663e211b\``);
        await queryRunner.query(`ALTER TABLE \`Enrollments\` DROP FOREIGN KEY \`FK_e19db00ac712e9851b33036c7c3\``);
        await queryRunner.query(`DROP TABLE \`Enrollments\``);
    }

}
