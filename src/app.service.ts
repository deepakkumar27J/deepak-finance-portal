import { Injectable } from '@nestjs/common';
import { Account } from './account/entities/account.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }
}
