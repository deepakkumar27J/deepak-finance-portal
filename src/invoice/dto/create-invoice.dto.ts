import { ApiProperty } from "@nestjs/swagger"

export enum InvoiceType {
    Course = "course",
    OverDue = "overDue",
}
export class CreateInvoiceDto {
    @ApiProperty()
    amount:number

    @ApiProperty()
    dueDate:Date

    @ApiProperty()
    types:InvoiceType

    @ApiProperty()
    studentEmail:string
}
