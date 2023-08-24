import { Expose, Transform } from "class-transformer"

export class UserDto {
    @Expose()
    id: string

    firstName: string
    lastName: string

    @Expose()
    @Transform(({obj}) => obj.firstName + ' ' + obj.lastName)
    fullname: string

    @Expose()
    isActive: boolean

    @Expose()
    roles: string
}