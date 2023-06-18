import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const openApiDocument = require('../openapi.json');
  SwaggerModule.setup('api', app, openApiDocument);
  await app.listen(3000);
}
bootstrap();
