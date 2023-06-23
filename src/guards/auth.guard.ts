import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) { }

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;
    console.log(authorization)
    try {
      const data = this.authService.checkToken(
        (authorization ?? ' ').split(' ')[1],
      );
      request.tokenPayLoad = data;
      return true;
    } catch (e) {
      return false;
    }
  }
}