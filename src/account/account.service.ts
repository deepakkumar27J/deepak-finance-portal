import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository : Repository<Account>,
  ) {}

  create(createAccountDto: CreateAccountDto) {
    return this.accountRepository.create(createAccountDto);
  }

  findAll() {
    return this.accountRepository.find();
  }

  findOne(id: number) {
    return this.accountRepository.findOneBy({id});
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return this.accountRepository.update(id, updateAccountDto);
  }

  remove(id: number) {
    return this.accountRepository.delete(id);
  }
}
