import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { LogInterceptor } from './user/interceptors/log.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LogInterceptor())
  app.useGlobalPipes(new ValidationPipe())
  const openApiDocument = require('../openapi.json');
  SwaggerModule.setup('api', app, openApiDocument);
  await app.listen(3000);
}
bootstrap();
