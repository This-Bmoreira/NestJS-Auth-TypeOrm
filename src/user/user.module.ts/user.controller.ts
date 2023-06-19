import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() body) {
    return { body }
  }
  @Get()
  async read() {
    return { users: [] }
  }
  @Get(':id')
  async readOnly(@Param() Param) {
    return { user: {}, Param }
  }
  @Put(':id')
  async update(@Body() body, @Param() Param) {
    return {
      body,
      Param
    }
  }
  @Patch(':id')
  async updatePartial(@Body() body, @Param() Param) {
    return {
      body,
      Param
    }
  }

  @Delete(':id')
  async delete(@Param() Param) {
    return {
      Param
    }
  }


}