import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class alterCityTable1639484848437 implements MigrationInterface {
    name = 'alterCityTable1639484848437'

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn('places',new TableColumn({
            type:"uuid",
            name:"city_id",
            isNullable:true
        }))

        await queryRunner.createForeignKey('places',new TableForeignKey({
            name:"placesForeignKy",
            columnNames:['city_id'],
            referencedTableName:'cities',
            referencedColumnNames:['id'],
            onDelete:'SET NULL',
             onUpdate:'CASCADE'
        }))
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('places','city_id')
        await queryRunner.dropForeignKey('places','placesForeignKy')

    }

}
