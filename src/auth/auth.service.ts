import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/entity/user.entity';
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>
  ) { }
  async createToken() {
    // return this.jwtService.sign()
  }

  async checkToken() {
    // return this.jwtService.verify()
  }

  async login(email: string, password: string) {
    const user = await this.usersRepository.findOneBy({
      email,
      password
    });
    if (!user) {
      throw new UnauthorizedException('E-mail e/ou senha incorretos');
    }
    return user;
  }
  async forget(email: string) {
    const user = await this.usersRepository.findOneBy({
      email,
    });
    if (!user) {
      throw new UnauthorizedException('E-mail senha incorreto');
    }
    // To DO: Enviar e e-mail...
    return true;
  }
  async reset(password: string, token: string) {
    // TO DO: validar o token...
    const id = 0;
    await this.usersRepository.update(id ,{
        password,
    });
    return true;
  }

}