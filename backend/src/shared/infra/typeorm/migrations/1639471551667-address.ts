import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class address1639471551667 implements MigrationInterface {
          
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"addresses",
                 columns:[
                      {
                          name:'id',
                          type:'uuid',
                          generationStrategy:'uuid',
                          isPrimary:true,
                          default:"uuid_generate_v4()"

                      },
                      {
                        name:'street',
                        type:'varchar',
                        isNullable:false
                        
                       },
                       {
                        name:'neighborhood',
                        type:'varchar',
                        
                       },
                       {
                        name:'numbers',
                        type:'varchar'
                        
                       },
                        {
                            name:'created_at',
                            type:'timestamp',
                            default:'now()'
                            
                        },
                        {
                            name:'updated_at',
                            type:'timestamp',
                            default:'now()'
                            
                        }
                    ]
                })
                )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("addresses")
    }

}
