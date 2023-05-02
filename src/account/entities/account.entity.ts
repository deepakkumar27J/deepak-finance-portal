import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    yearIntake:number

    @Column()
    cgpa:number;

    @Column()
    DuesClear:boolean;

    @Column()
    firstName:string

    @Column()
    lastName:string

    @Column()
    emailId:string

    @Column()
    dob:Date

    @Column()
    password:string

    @Column()
    phoneNumber:string


}
