import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AccountModule } from './account/account.module';
import { Account } from './account/entities/account.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:"localhost",
    username:"root",
    password:"root",
    database:"finance",
    entities: [Account],
    synchronize:true,
  }), AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
