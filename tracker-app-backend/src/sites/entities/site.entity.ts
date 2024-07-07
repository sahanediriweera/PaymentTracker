import { Site } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger"; 

export class SiteEntity implements Site {
    @ApiProperty()
    name: string;

    @ApiProperty()
    id:number;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

}
