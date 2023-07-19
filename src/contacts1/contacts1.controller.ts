/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Contacts1Service } from './contacts1.service';
import { CreateContacts1Dto } from './dto/create-contacts1.dto';
import { UpdateContacts1Dto } from './dto/update-contacts1.dto';
import { IdDto } from './dto/id.dto';

@Controller('contacts1')
export class Contacts1Controller {
  constructor(private readonly contacts1Service: Contacts1Service) {}

  @Post()
  create(@Body() createContacts1Dto: CreateContacts1Dto) {
    return this.contacts1Service.create(createContacts1Dto);
  }

  @Get()
  findAll() {
    return this.contacts1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: IdDto) {
    return this.contacts1Service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: IdDto, @Body() updateContacts1Dto: UpdateContacts1Dto) {
    return this.contacts1Service.update(id, updateContacts1Dto);
  }

  @Patch(':id')
  remove(@Param('id') id: IdDto) {
    return this.contacts1Service.remove(id);
  }
}
