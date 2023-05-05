import { Invoice } from "src/invoice/entities/invoice.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    firstName:string

    @Column()
    lastName:string

    @Column()
    emailId:string

    @Column()
    password:string

    @OneToMany(() => Invoice, (invoice) => invoice.account)
    invocies: Invoice[]
}
