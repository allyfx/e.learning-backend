import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateLessonsTable1603642879591 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'lessons',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'count',
                    type: 'integer',
                    isUnique: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'duration',
                    type: 'decimal',
                    precision: 10,
                    scale: 2,
                },
                {
                    name: 'course_id',
                    type: 'uuid',
                },
                {
                    name: 'description',
                    type: 'text',
                },
                {
                    name: 'video_id',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                }
            ],
            foreignKeys: [
                {
                    name: 'CourseRelation',
                    columnNames: ['course_id'],
                    referencedTableName: 'courses',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('lessons');
    }

}
