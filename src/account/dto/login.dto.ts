import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, IsString, MaxLength } from 'class-validator';
export class loginDto {

    @ApiProperty()
    @IsString()
    @IsAlphanumeric()
    @MaxLength(25)
    username: string;

    @ApiProperty()
    @IsString()
    password: string;
}