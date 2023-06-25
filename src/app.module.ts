import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { Module, forwardRef } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserEntity } from './user/entity/user.entity';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    forwardRef(() => AuthModule),
    forwardRef(() => UserModule),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [UserEntity],
      synchronize: process.env.NODE_ENV === "development"
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'rowena.kessler77@ethereal.email',
          pass: 'eaN42qSUZA5ATs7KRA'
        }
      },
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },

      template: {
        dir: join(__dirname, '..', 'templates'),
        adapter: new PugAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService]
})
export class AppModule { }
