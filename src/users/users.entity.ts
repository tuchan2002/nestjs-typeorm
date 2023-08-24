import { BaseEntity } from "src/common/base.entity"
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({
    name: 'users'
})
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({
        default: false
    })
    isActive: boolean

    @Column({
        type: "enum",
        enum: ["admin", "agent", "candidate"],
        default: "candidate"
    })
    roles: string
}