import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  const openApiDocument = require('../openapi.json');
  SwaggerModule.setup('api', app, openApiDocument);
  await app.listen(3000);
}
bootstrap();
