/* eslint-disable prettier/prettier */
// contact1.entity.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { CreateContacts1Dto } from '../dto/create-contacts1.dto';
import { Contact1 } from './contact1.schema';
import { IdDto } from '../dto/id.dto';
import { UpdateContacts1Dto } from '../dto/update-contacts1.dto';


@Injectable()
export class Contact1Entity {
  constructor(
    @InjectRepository(Contact1)
    private readonly contactRepository: MongoRepository<Contact1>,
  ) {}

  async create(contactContactDto: CreateContacts1Dto): Promise<Contact1> {
    return this.contactRepository.save({...contactContactDto,isDeleted:false});
  }
  async findAll(): Promise<Contact1[]>{
    return this.contactRepository.find()
  }
  async findOneById(idto:IdDto): Promise<Contact1> {
    return this.contactRepository.findOne({
        where: {
            id:idto.id
        }
    });
  }
  async findByIdAndUpdate(idto:IdDto,updateDto:UpdateContacts1Dto):Promise<{message:string}>{
    await this.contactRepository.update(idto.id,updateDto)
    return {message:'updated successfully'}
  }

  async removebyID(idto:IdDto):Promise<{ message: string }>{
    await this.contactRepository.update(idto.id, { isDeleted:true })
    return { message: 'Deleted successfully' };
  }
}




