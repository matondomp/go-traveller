
import { 
     Column,
     Entity,
     PrimaryGeneratedColumn,
     CreateDateColumn ,
     UpdateDateColumn
} from "typeorm"

@Entity("cities")
 class City{
   
    @PrimaryGeneratedColumn('uuid')
    id!:string

    @Column()
    name!:string

    @Column()
    description!:string

    @Column()
    avatar!:string

    @CreateDateColumn()
    created_at!:Date

    @UpdateDateColumn()
    updated_at!:Date
}

export { City }