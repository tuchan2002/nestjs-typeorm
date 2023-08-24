import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn } from "typeorm"

export abstract class BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn({
        name: "created_at"
    })
    createdAt: Date;

    @CreateDateColumn({
        name: "updated_at"
    })
    updatedAt: Date;

    @DeleteDateColumn({
        name: "deleted_at"
    })
    deletedAt: Date;

}