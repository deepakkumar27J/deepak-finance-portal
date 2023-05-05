import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from './entities/invoice.entity';
import { Repository } from 'typeorm';
import { Account } from 'src/account/entities/account.entity';
import moment from 'moment';


export enum InvoiceType {
  Course = "course",
  OverDue = "overDue",
}

export enum InvoiceStatus {
  Paid = "paid",
  Unpaid = "unpaid",
  Cancelled = "cancelled"
}

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private readonly invoiceRepository : Repository<Invoice>,
    @InjectRepository(Account)
    private readonly accountRepository : Repository<Account>,
  ) {}

  async create(createInvoiceDto: CreateInvoiceDto) {
    const student = await this.accountRepository.findOneBy({emailId:createInvoiceDto.studentEmail});
    var reference = Math.random().toString(36).slice(-8);
    createInvoiceDto['reference'] = reference;
    createInvoiceDto['account'] = student;
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate()+7);
    createInvoiceDto['dueDate'] = createInvoiceDto.dueDate? new Date(createInvoiceDto.dueDate): dueDate;
    const invoiceCreate = this.invoiceRepository.create(createInvoiceDto);
    this.invoiceRepository.save(invoiceCreate);
    return createInvoiceDto;
  }

  findAll() {
    return `This action returns all invoice`;
  }

  findOne(referecne: string) {
    return this.invoiceRepository.findOneBy({reference:referecne});
  }

  async findAllInvoices(emailId: string) {
    const student = await this.accountRepository.findOneBy({emailId:emailId});
    return this.invoiceRepository.find({
      where: {
        account: student
    },
    relations: ['account'],
    })
  }
  async findUnpaidInvoices(emailId: string) {
    const student = await this.accountRepository.findOneBy({emailId:emailId});
    return this.invoiceRepository.find({
      where: {
        Status:InvoiceStatus.Unpaid,
        account: student
    },
    relations: ['account'],
    })
  }
  async findPaidInvoices(emailId: string) {
    const student = await this.accountRepository.findOneBy({emailId:emailId});
    return this.invoiceRepository.find({
      where: {
        Status:InvoiceStatus.Paid,
        account: student
    },
    relations: ['account'],
    })
  }
  async canGraduate(emailId: string) {
    const invoices = await this.findUnpaidInvoices(emailId);
    if(invoices.length>0){
      return false
    }
    return true;
  }

  async update(referecne: string) {
    return this.invoiceRepository.update({reference:referecne}, {Status:InvoiceStatus.Paid});
  }

  remove(id: number) {
    return `This action removes a #${id} invoice`;
  }
}
