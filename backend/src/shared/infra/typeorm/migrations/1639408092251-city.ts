import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class city1639408092251 implements MigrationInterface {
      
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"cities",
                 columns:[
                      {
                          name:'id',
                          type:'uuid',
                          generationStrategy:'uuid',
                          isPrimary:true,
                          default:"uuid_generate_v4()"

                      },
                      {
                        name:'name',
                        type:'varchar',
                        isNullable:false
                        
                       },
                       {
                        name:'avatar',
                        type:'varchar',
                        isNullable:true
                        
                       },
                       {
                        name:'description',
                        type:'varchar',
                        isNullable:true
                        
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
        await queryRunner.dropTable("cities")
    }

}
