import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { Invoice } from './entities/invoice.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from 'src/account/account.module';
import { AccountService } from 'src/account/account.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Invoice]),
    AccountModule
],
  controllers: [InvoiceController],
  providers: [InvoiceService],
  exports:[InvoiceService]
})
export class InvoiceModule {}
