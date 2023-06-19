import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./DTO/create-user.dto";

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
  async readOnly(@Param() param) {
    return { user: {}, param }
  }
  @Put(':id')
  async update(@Body() body, @Param() param) {
    return {
      body,
      param
    }
  }
  @Patch(':id')
  async updatePartial(@Body() body, @Param() param) {
    return {
      body,
      param
    }
  }

  @Delete(':id')
  async delete(@Param() param) {
    return {
      param
    }
  }


}