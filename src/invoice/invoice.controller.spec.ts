import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceController } from './invoice.controller';
import { InvoiceService, InvoiceType } from './invoice.service';
import { AccountModule } from 'src/account/account.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from './entities/invoice.entity';

describe('InvoiceController', () => {
  let controller: InvoiceController;
  let createInvoiceDto = {
    "amount":5,
    "dueDate":new Date(),
    "types":InvoiceType.Course,
    "studentEmail":"C@deepak.com"

  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvoiceController],
      providers: [InvoiceService],
      imports:[TypeOrmModule.forFeature([Invoice]), AccountModule],
      exports:[InvoiceService]
    }).compile();

    controller = module.get<InvoiceController>(InvoiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createInvoice', ()=>{
    it('should return 200', ()=>{
      controller.create(createInvoiceDto);
    })
  })
});
