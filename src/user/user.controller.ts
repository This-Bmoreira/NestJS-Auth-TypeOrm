import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./DTO/create-user.dto";
import { UpdatePatchUserDTO } from "./DTO/update-patch-user.dto";
import { UpdatePutUserDTO } from "./DTO/update-put-user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Post()
  async create(@Body() body: CreateUserDTO) {
    return this.userService.create(body)
  }
  @Get()
  async list() {
    return this.userService.list()
  }
  @Get(':id')
  async show(@Param('id', ParseIntPipe) id: number) {
    return this.userService.show(id)
  }
  @Put(':id')
  async update(@Body() body: UpdatePutUserDTO, @Param('id', ParseIntPipe) id: number) {
    return {
      body,
      id
    }
  }
  @Patch(':id')
  async updatePartial(@Body() body: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number) {
    return {
      body,
      id
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return {
      id
    }
  }


}