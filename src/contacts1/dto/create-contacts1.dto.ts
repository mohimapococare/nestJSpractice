/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsString, IsNumber, MaxLength, MinLength} from 'class-validator';

export class CreateContacts1Dto{

    @IsNotEmpty()
    @IsString()
    @MaxLength(17)
    name:string;

    @IsNotEmpty()
    @IsNumber()
    phone: number;
    
}
