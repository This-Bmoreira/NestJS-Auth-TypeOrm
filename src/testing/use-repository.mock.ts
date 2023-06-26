import { getRepositoryToken } from "@nestjs/typeorm";
import { UserEntity } from "../user/entity/user.entity";
import { userEntityList } from "./user-entity-list.mocks";

export const userRepositoryMock = {
  provide: getRepositoryToken(UserEntity),
  useValue: {
    create: jest.fn(),
    save: jest.fn().mockResolvedValue(userEntityList[0]),
    find: jest.fn(),
    findOneBy: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    exist: jest.fn(),
  }
}
