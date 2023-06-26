import { Role } from "../enums/role.enum";
import { UserEntity } from "../user/entity/user.entity";

export const userEntityList: UserEntity[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    password: '$2b$10$IfhUx0aeFKiJVoiaCpGwy.J9LZzGiOd6PyQX/u0RkcjfEUjhr0FHS',
    role: Role.Admin,
    birthAt: new Date('1992-12-10'),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    password: '$2b$10$IfhUx0aeFKiJVoiaCpGwy.J9LZzGiOd6PyQX/u0RkcjfEUjhr0FHS',
    role: Role.User,
    birthAt: new Date('1985-10-20'),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 5,
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: '$2b$10$IfhUx0aeFKiJVoiaCpGwy.J9LZzGiOd6PyQX/u0RkcjfEUjhr0FHS',
    role: Role.User,
    birthAt: new Date('1992-04-12'),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 7,
    name: 'Emily Johnson',
    email: 'emily.johnson@example.com',
    password: '$2b$10$IfhUx0aeFKiJVoiaCpGwy.J9LZzGiOd6PyQX/u0RkcjfEUjhr0FHS',
    role: Role.User,
    birthAt: new Date('1988-08-05'),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 9,
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    password: '$2b$10$IfhUx0aeFKiJVoiaCpGwy.J9LZzGiOd6PyQX/u0RkcjfEUjhr0FHS',
    role: Role.User,
    birthAt: new Date('1995-02-18'),
    createdAt: new Date(),
    updatedAt: new Date()
  }
];