import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { createUserDTO } from "../testing/create-use-dto.mock";
import { updatePutUserDTO } from "../testing/update-put-user.dto.mock";
import { userRepositoryMock } from "../testing/use-repository.mock";
import { userEntityList } from "../testing/user.entity-list.mocks";
import { UserEntity } from "./entity/user.entity";
import { UserService } from "./user.service";
import { updatePatchUserDTO } from "../testing/update-patch-user.dto.mock";

describe('UserService', () => {
  let userService: UserService;
  let userRepository: Repository<UserEntity>
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        userRepositoryMock,
      ]
    }).compile()
    userService = module.get<UserService>(UserService)
    userRepository = module.get(getRepositoryToken(UserEntity))
  })

  test('Validar a definição ', () => {
    expect(userService).toBeDefined()
    expect(userRepository).toBeDefined()
  })

  describe('create', () => {
    test('method create', async () => {
      jest.spyOn(userRepository, 'exist').mockResolvedValueOnce(false)
      const result = await userService.create(createUserDTO)
      expect(result).toEqual(userEntityList[0])
    })
  })

  describe('read', () => {
    test('method list', async () => {
      const result = await userService.list()
      expect(result).toEqual(userEntityList)
    })

    test('method show', async () => {
      const result = await userService.show(1)
      expect(result).toEqual(userEntityList[0])
    })
  })

  describe('update', () => {
    test('method update', async () => {
      const result = await userService.update(1, updatePutUserDTO)
      expect(result).toEqual(userEntityList[0])
    })

    test('method updatePartial', async () => {
      const result = await userService.updatePartial(1, updatePatchUserDTO )
      expect(result).toEqual(userEntityList[0])
    })
  })

  describe('delete', () => {
    test('method delete', async () => {
      const result = await userService.delete(1)
      expect(result).toEqual(true)
    })
  })
})