import { MigrationInterface, QueryRunner, Table } from "typeorm";


export class Migrate1687265506002 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'USER',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    unsigned: true,
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'increment',
                },

                {
                    name: 'name',
                    type: 'varchar',
                    length: '63',
                },

                {
                    name: 'email',
                    type: 'varchar',
                    length: '127',
                    isUnique: true
                },

                {
                    name: 'password',
                    type: 'varchar',
                    length: '127',
                },

                {
                    name: 'birthAt',
                    type: 'date',
                    isNullable: true
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP()',
                },
                {
                    name: 'updatedAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP()',
                },
                {
                    name: 'role',
                    type: 'int',
                    default: '1'
                }
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('USER');
    }
}
