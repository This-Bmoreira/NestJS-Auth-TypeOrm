import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/entity/user.entity';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
@Module({
  imports: [
    JwtModule.register({
      secret: String(process.env.JWT_SECRET)
    }),
    UserModule,
    TypeOrmModule.forFeature([UserEntity])
  ],
  controllers: [AuthController]
})

export class AuthModule { }