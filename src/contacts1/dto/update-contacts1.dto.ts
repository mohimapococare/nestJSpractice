/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateContacts1Dto } from './create-contacts1.dto';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class UpdateContacts1Dto extends PartialType(CreateContacts1Dto) {
    @MaxLength(17)
    @IsNotEmpty()
    @IsString()
    name?: string;

    @IsNotEmpty()
    @IsNumber()
    phone?: number;
}
