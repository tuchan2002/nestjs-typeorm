import { plainToInstance } from "class-transformer";
import { UserDto } from "src/users/user.dto";
import { Repository } from "typeorm";
import { BaseEntity } from "./base.entity"

export class BaseService<Entity extends BaseEntity> {
    constructor(protected repo: Repository<Entity>) {
    }

    async create(userDto: any) {
        const savedUser = await this.repo.save(userDto);

        return plainToInstance(UserDto, savedUser, {
            excludeExtraneousValues: true
        })
    }

    async update(id: string, userDto: any) {
        const updatedUser = await this.repo.update(id, userDto);

        return {
            success: true
        }
    }

    async findOne(id: string) {
        const foundUser = await this.repo.findOne({
            where: {
                id: id as any
            }
        })

        if(foundUser === null) {
            return {
                message: "User not found."
            }
        }

        return plainToInstance(UserDto, foundUser, {
            excludeExtraneousValues: true
        })
    }

    async deleteById(id: string) {
        const deletedUser = await this.repo.softDelete(id);

        return {
            success: true
        }
    }
}