import { 
     Column,
     Entity,
     PrimaryGeneratedColumn,
     CreateDateColumn ,
     UpdateDateColumn,
     ManyToOne,
     JoinColumn
} from "typeorm"

import { Category } from "@modules/categories/infra/typeorm/entities/category"
import { Address } from "@modules/addresses/infra/typeorm/entities/address"
import { City } from "@modules/cities/infra/typeorm/entities/city"

@Entity("places")
 class Place{
   
    @PrimaryGeneratedColumn('uuid')
    id!:string

    @Column()
    name!:string

    @Column()
    description!:string

    @Column()
    avatar!:string

    @Column()
    address_id!:string

    @ManyToOne(()=>Address)
    @JoinColumn({ name:'address_id' })
    address!:Address
    
    @Column()
    category_id!:string

    @Column()
    city_id!:string

    @ManyToOne(()=>City)
    @JoinColumn({name:'city_id'})
    city!:City
    
    @ManyToOne(()=>Category)
    @JoinColumn({ name:'category_id' })
    category!:Category

    @CreateDateColumn()
    created_at!:Date

    @UpdateDateColumn()
    updated_at!:Date
}

export { Place }