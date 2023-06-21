import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDTO } from "./DTO/create-user.dto";
import { UpdatePutUserDTO } from "./DTO/update-put-user.dto";
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
    await this.exists(id)
    return this.usersRepository.findOneBy({
      id,
    });
  }
  async update(
    id: number,
    { email, name, password, birthAt }: UpdatePutUserDTO,
  ) {
    await this.exists(id);
    await this.usersRepository.update(id, {
      email,
      name,
      password,
      birthAt: birthAt ? new Date(birthAt) : null,
    });
    return this.show(id);
  }

  async exists(id: number) {
    if (
      !(await this.usersRepository.exist({
        where: {
          id,
        },
      }))
    ) {
      throw new NotFoundException(`O usuário ${id} não existe.`);
    }
  }
}
