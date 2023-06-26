import { Test, TestingModule } from "@nestjs/testing";
import { createUserDTO } from "../testing/create-use-dto.mock";
import { userRepositoryMock } from "../testing/use-repository.mock";
import { UserService } from "./user.service";
import { userEntityList } from "../testing/user-entity-list.mocks";

describe('UserService', () => {
  let userService: UserService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        userRepositoryMock,
      ]
    }).compile()
    userService = module.get<UserService>(UserService)
  })

  test('Validar a definição ', () => {
    expect(userService).toBeDefined()
  })

  describe('create', () => {
    test('method create', async () => {
      const result = await userService.create(createUserDTO)
      expect(result).toEqual(userEntityList[0])
    })
  })
})