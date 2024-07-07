import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty} from 'class-validator';

export class CreateRecordDto {

    @IsNotEmpty()
    @ApiProperty()
    userId: number;

    @IsNotEmpty()
    @ApiProperty()
    siteId: number;

    @IsNotEmpty()
    @ApiProperty()
    advancePayment: number;

    @IsNotEmpty()
    @ApiProperty()
    remarks: string;

    @IsNotEmpty()
    @ApiProperty()
    currentDate: Date;
}
