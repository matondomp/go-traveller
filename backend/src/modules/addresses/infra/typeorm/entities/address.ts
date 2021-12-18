import { 
     Column,
     Entity,
     PrimaryGeneratedColumn,
     CreateDateColumn ,
     UpdateDateColumn
} from "typeorm"

@Entity("addresses")
 class Address{
   
    @PrimaryGeneratedColumn('uuid')
    id!:string

    @Column()
    street!:string

    @Column()
    neighborhood!:string

    @Column()
    numbers!:string

    @CreateDateColumn()
    created_at!:Date

    @UpdateDateColumn()
    updated_at!:Date
}

export { Address }