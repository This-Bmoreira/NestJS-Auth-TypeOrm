import { Test, TestingModule } from "@nestjs/testing";
import { jwtServiceMock } from "../testing/jwt-service.mock";
import { mailerServiceMock } from "../testing/mailer-service.mock";
import { userRepositoryMock } from "../testing/use-repository.mock";
import { userServiceMock } from "../testing/user-service.mock";
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
})