import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDTO } from "./DTO/create-user.dto";
import { UserEntity } from "./entity/user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>
  ) { }

  async create(data: CreateUserDTO) {
    if (
      await this.usersRepository.exist({
        where: {
          email: data.email,
        },
      })
    ) {
      throw new BadRequestException('Este e-mail já está sendo usado.');
    }
    const user = this.usersRepository.create(data);
    return this.usersRepository.save(user);
  }
  async list() {
    return this.usersRepository.find()
  }

  async show(id: number) {
    const user = await this.usersRepository.findOneBy({
      id
    })
    if (!user) {
      throw new NotFoundException('Recurso não encontrado.');
    }
    return user
  }

}