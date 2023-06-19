import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./DTO/create-user.dto";
import { UpdatePatchUserDTO } from "./DTO/update-patch-user.dto";
import { UpdatePutUserDTO } from "./DTO/update-put-user.dto";

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() body: CreateUserDTO) {
    return { body }
  }
  @Get()
  async read() {
    return { users: [] }
  }
  @Get(':id')
  async readOnly(@Param('id', ParseIntPipe) id: number) {
    return { user: {}, id }
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