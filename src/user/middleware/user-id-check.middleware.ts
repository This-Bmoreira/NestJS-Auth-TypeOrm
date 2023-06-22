
import { BadRequestException, NestMiddleware } from '@nestjs/common';

import { NextFunction, Request, Response } from 'express';
export class UserIdCheckMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction) {
    console.log('User Validation Middleware: Before ID Check');

    const idPattern = /^\d+$/; // Expressão regular para verificar se é um número inteiro positivo
    if (!idPattern.test(request.params.id)) {
      throw new BadRequestException('ID inválido!');
    }
    console.log('User Validation Middleware: after ID Check');
    next();
  }
}
