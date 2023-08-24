import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserDto } from "./user.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {
    }

    @Post()
    createUser(@Body() user: UserDto) {
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