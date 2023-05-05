import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AccountModule } from './account/account.module';
import { Account } from './account/entities/account.entity';
import { InvoiceModule } from './invoice/invoice.module';
import { Invoice } from './invoice/entities/invoice.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:"localhost",
    username:"root",
    password:"root",
    database:"finance",
    entities: [Account, Invoice],
    synchronize:true,
  }), AccountModule, InvoiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
