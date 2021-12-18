import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class place1639473416802 implements MigrationInterface {
    name = 'place1639473416802'

    public async up(queryRunner: QueryRunner): Promise<void> {
      
            await queryRunner.dropColumn("places","category_id")
            await queryRunner.dropColumn("places","address_id")

          await queryRunner.addColumn("places",new TableColumn({
              type:"uuid",
              name:"category_id",
              isNullable:true
          }))

            await queryRunner.addColumn("places",new TableColumn({
                type:"uuid",
                name:"address_id",
                isNullable:true
            }))

            await queryRunner.createForeignKey("places",
                new TableForeignKey({
                    name:"placesCategoryForeignKey",
                    columnNames:["category_id"],
                    referencedColumnNames:["id"],
                    referencedTableName:"categories",
                    onDelete:"SET NULL",
                    onUpdate:"CASCADE"
                })
            )

            await queryRunner.createForeignKey("places",
            new TableForeignKey({
                name:"placesAddressForeignKey",
                columnNames:["address_id"],
                referencedColumnNames:["id"],
                referencedTableName:"addresses",
                onDelete:"SET NULL",
                onUpdate:"CASCADE"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        
         await queryRunner.dropForeignKey("places","placesCategoryForeignKey")
         await queryRunner.dropForeignKey("places","placesAddressForeignKey")
         await queryRunner.dropColumn("places","category_id")
         await queryRunner.dropColumn("places","address_id")

         await queryRunner.addColumn("places",new TableColumn({
            type:"uuid",
            name:"category_id",
            isNullable:true
        }))

          await queryRunner.addColumn("places",new TableColumn({
              type:"uuid",
              name:"address_id",
              isNullable:true
          }))

    }

}
