/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsBoolean ,IsString} from 'class-validator';

export class CreateTodoDto{

    @IsNotEmpty()
    title:string;

    @IsBoolean()
    @IsNotEmpty()
    status:boolean;

    @IsNotEmpty()
    @IsString()
    description:string;

    @IsNotEmpty()
    @IsString()
    user:string;
    
}