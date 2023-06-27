import { Test, TestingModule } from "@nestjs/testing";
import { accessToken } from "../testing/access-token.mock";
import { authRegisterDTO } from "../testing/auth-register-dto.mock";
import { jwtPayload } from "../testing/jwt-payload.mock";
import { jwtServiceMock } from "../testing/jwt-service.mock";
import { mailerServiceMock } from "../testing/mailer-service.mock";
import { userRepositoryMock } from "../testing/use-repository.mock";
import { userServiceMock } from "../testing/user-service.mock";
import { userEntityList } from "../testing/user.entity-list.mocks";
import { AuthService } from "./auth.service";


describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        jwtServiceMock,
        userRepositoryMock,
        userServiceMock,
        mailerServiceMock,
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  test('Validar a definição', () => {
    expect(authService).toBeDefined();
  });

  describe('token', () => {
    test('createToken method', () => {
      const result = authService.createToken(userEntityList[0]);
      expect(result).toEqual({
        accessToken
      })
    })
    test('checkToken method', () => {
      const result = authService.checkToken(accessToken);
      expect(result).toEqual({
        jwtPayload
      })
    })
    test('isValidToken method', () => {
      const result = authService.isValidToken(accessToken);
      expect(result).toEqual(true)
    })
  })

  describe('auth', () => {
    test('login method', async () => {
      const result = await authService.login('admin@gmail.com', '111111');

      expect(result).toEqual({ accessToken });
    });
    test('forget method', async () => {
      const result = await authService.forget('admin@gmail.com');

      expect(result).toEqual(true);
    });
 
    test('register method', async () => {
      const result = await authService.register(authRegisterDTO);

      expect(result).toEqual({ accessToken });
    });
  })
})