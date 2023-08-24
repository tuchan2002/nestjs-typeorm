import { ApiProperty } from "@nestjs/swagger"
import { Expose, Transform } from "class-transformer"

export class CreateUserDto {
    @ApiProperty()
    firstName: string

    @ApiProperty()
    lastName: string

    @ApiProperty()
    isActive: boolean

    @ApiProperty({ enum: ['admin', 'agent', 'candidate']})
    roles: string
}