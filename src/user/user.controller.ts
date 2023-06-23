import { Body, Controller, Delete, Get, Patch, Post, Put, UseGuards } from "@nestjs/common";
import { ParamId } from "../decorators/param-id.decorator";
import { Roles } from "../decorators/role.decorator";
import { Role } from "../enums/role.enum";
import { RoleGuard } from "../guards/role.guard";
import { CreateUserDTO } from "./DTO/create-user.dto";
import { UpdatePatchUserDTO } from "./DTO/update-patch-user.dto";
import { UpdatePutUserDTO } from "./DTO/update-put-user.dto";
import { UserService } from "./user.service";

@UseGuards(RoleGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Roles(Role.Admin)
  @Post()
  async create(@Body() body: CreateUserDTO) {
    return this.userService.create(body)
  }
  @Roles(Role.Admin, Role.User)
  @Get()
  async list() {
    return this.userService.list()
  }
  @Roles(Role.Admin, Role.User)
  @Get(':id')
  async show(@ParamId() id: number) {
    return this.userService.show(id)
  }
  @Roles(Role.Admin)
  @Put(':id')
  async update(@Body() body: UpdatePutUserDTO, @ParamId() id: number) {
    return this.userService.update(id, body)
  }
  @Roles(Role.Admin)
  @Patch(':id')
  async updatePartial(@Body() body: UpdatePatchUserDTO, @ParamId() id: number) {
    return this.userService.updatePartial(id, body)

  }
  @Roles(Role.Admin)
  @Delete(':id')
  async delete(@ParamId() id: number) {
    return this.userService.delete(id)
  }

}