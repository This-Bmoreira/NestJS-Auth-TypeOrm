import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/entity/user.entity';
import { UserService } from '../user/user.service';
import { AuthRegisterDTO } from './DTO/auth-register.dto';
@Injectable()
export class AuthService {
  private issuer = 'login';
  private audience = 'users';
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    private readonly userService: UserService
  ) { }
  async createToken(user: UserEntity) {
    return {
      accessToken: this.jwtService.sign(
        {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        {
          expiresIn: '7 days',
          subject: String(user.id),
          issuer: this.issuer,
          audience: this.audience,
        },
      )
    };
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
    return this.createToken(user);
  }
  async forget(email: string) {
    const user = await this.usersRepository.findOneBy({
      email,
    });
    if (!user) {
      throw new UnauthorizedException('E-mail senha incorreto');
    }
    // To DO: Enviar e e-mail...
    return this.createToken(user);
  }
  async reset(password: string, token: string) {
    // TO DO: validar o token...
    const id = 0;
    await this.usersRepository.update(id, {
      password,
    });
    return true;
  }
  async register(data: AuthRegisterDTO) {
    const user = await this.userService.create(data);
    return this.createToken(user);
  }
}