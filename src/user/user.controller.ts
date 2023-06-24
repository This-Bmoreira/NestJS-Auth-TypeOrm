import { Body, Controller, Delete, Get, Patch, Post, Put, UseGuards } from "@nestjs/common";
import { ParamId } from "../decorators/param-id.decorator";
import { Roles } from "../decorators/role.decorator";
import { Role } from "../enums/role.enum";
import { AuthGuard } from "../guards/auth.guard";
import { RoleGuard } from "../guards/role.guard";
import { CreateUserDTO } from "./DTO/create-user.dto";
import { UpdatePatchUserDTO } from "./DTO/update-patch-user.dto";
import { UpdatePutUserDTO } from "./DTO/update-put-user.dto";
import { UserService } from "./user.service";
import { ThrottlerGuard } from "@nestjs/throttler";

@UseGuards(ThrottlerGuard)
@Roles(Role.Admin)
@UseGuards(AuthGuard, RoleGuard)
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
  async show(@ParamId() id: number) {
    return this.userService.show(id)
  }

  @Put(':id')
  async update(@Body() body: UpdatePutUserDTO, @ParamId() id: number) {
    return this.userService.update(id, body)
  }

  @Patch(':id')
  async updatePartial(@Body() body: UpdatePatchUserDTO, @ParamId() id: number) {
    return this.userService.updatePartial(id, body)

  }

  @Delete(':id')
  async delete(@ParamId() id: number) {
    return this.userService.delete(id)
  }

}