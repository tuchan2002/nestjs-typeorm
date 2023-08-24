import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserDto } from "./user.dto";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./create-user.dto";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {
    }

    @Post()
    createUser(@Body() user: CreateUserDto) {
        console.log(this.userService.create(user));
        return this.userService.create(user)
    }

    @Put(':id')
    updateUserById(@Param('id') id: string, @Body() user: UserDto) {
        return this.userService.update(id, user)
    }
    
    @Get(":id")
    getUserById(@Param('id') id: string) {
        return this.userService.findOne(id)
    }

    @Delete(':id')
    deleteUserById(@Param('id') id: string) {
        return this.userService.deleteById(id)
    }
}