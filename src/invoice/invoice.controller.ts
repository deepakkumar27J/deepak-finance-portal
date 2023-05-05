import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  async create(@Body() createInvoiceDto: CreateInvoiceDto) {
    return await this.invoiceService.create(createInvoiceDto);
  }

  @Get()
  findAll() {
    return this.invoiceService.findAll();
  }

  @Get('allInvoice/:emailId')
  async findAllInvoices(@Param('emailId') emailId: string) {
    return this.invoiceService.findAllInvoices(emailId);
  }

  @Get('unpaid/:emailId')
  findUnpaidInvoices(@Param('emailId') emailId: string) {
    return this.invoiceService.findUnpaidInvoices(emailId);
  }
  @Get('paid/:emailId')
  findPaidInvoices(@Param('emailId') emailId: string) {
    return this.invoiceService.findPaidInvoices(emailId);
  }
  @Get('dues/:emailId')
  canGraduate(@Param('emailId') emailId: string) {
    return this.invoiceService.canGraduate(emailId);
  }
  @Get(':reference')
  findOne(@Param('reference') reference: string) {
    return this.invoiceService.findOne(reference);
  }

  @Patch('pay/:reference')
  async update(@Param('reference') reference: string) {
    return await this.invoiceService.update(reference);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invoiceService.remove(+id);
  }
}
