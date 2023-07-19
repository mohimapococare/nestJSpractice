/* eslint-disable prettier/prettier */
import { IsAlphanumeric, MaxLength, MinLength } from 'class-validator';

export class IdDto {
    @IsAlphanumeric()
    @MinLength(24)
    @MaxLength(24)
    @IdDto()
    id: string;
}
