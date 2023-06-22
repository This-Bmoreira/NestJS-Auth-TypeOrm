import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
@Module({
  imports: [
    JwtModule.register({
      secret: String(process.env.JWT_SECRET)
    }),
    UserModule
  ],
})

export class AuthModule { }