import { IsAlphanumeric, Length, min } from "class-validator"
import { Account } from "src/account/entities/account.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

export enum InvoiceType {
    Course = "course",
    OverDue = "overDue",
}

export enum InvoiceStatus {
    Paid = "paid",
    Unpaid = "unpaid",
    Cancelled = "cancelled"
}

@Entity()
export class Invoice {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    @Length(8,8)
    @IsAlphanumeric()
    reference:string

    @Column()
    amount:number

    @Column()
    dueDate:Date

    @Column({
        type: "enum",
        enum: InvoiceStatus,
        default: InvoiceStatus.Unpaid
    })
    Status:InvoiceStatus

    @Column({
        type: "enum",
        enum: InvoiceType
    })
    types:InvoiceType

    @ManyToOne(() => Account, (account) => account.invocies)
    account: Account

}
