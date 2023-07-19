/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { Contacts1Service } from './contacts1.service';
import { Contacts1Controller } from './contacts1.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact1 } from './entities/contact1.schema';
import { Contact1Entity } from './entities/contacts1.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contact1])],
  controllers: [Contacts1Controller],
  providers: [Contacts1Service,Contact1Entity],
})
export class Contacts1Module {}
