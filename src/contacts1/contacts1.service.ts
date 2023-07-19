/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateContacts1Dto } from './dto/create-contacts1.dto';
import { UpdateContacts1Dto } from './dto/update-contacts1.dto';
import { Contact1Entity } from './entities/contacts1.entity';
import { IdDto } from './dto/id.dto';

@Injectable()
export class Contacts1Service {
  constructor(
    private readonly contactEntity:Contact1Entity
  ){}

  create(createContacts1Dto: CreateContacts1Dto) {

    return this.contactEntity.create(createContacts1Dto);
  }

  findAll() {
    return this.contactEntity.findAll()
  }

  findOne(id:IdDto) {
    return this.contactEntity.findOneById(id)
  }

  update(id: IdDto, updateContacts1Dto: UpdateContacts1Dto) {
    return this.contactEntity.findByIdAndUpdate(id,updateContacts1Dto)
  }

  remove(id: IdDto) {
    return this.contactEntity.removebyID(id);
  }
}
