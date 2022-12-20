import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class products1671444251628 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products_test',
                columns:[
                    {
                        name: 'id',
                        type: 'bigint',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name:'code',
                        type:'varchar'
                    },
                    {
                        name:'state',
                        type:'varchar'
                    },
                    {
                        name:'status',
                        type:'varchar'
                    },
                    {
                        name:'is_deleted',
                        type:'varchar'
                    },
                    {
                        name:'created_date',
                        type:'datetime'
                    },
                    {
                        name:'updated_date',
                        type:'datetime'
                    },
                    {
                        name:'created_by',
                        type:'bigint'
                    },
                    {
                        name:'updated_by',
                        type:'bigint'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
