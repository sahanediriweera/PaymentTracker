import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty} from 'class-validator';

export class CreateSiteDto {

    @IsNotEmpty()
    @ApiProperty({required: true})
    name:string;

}
