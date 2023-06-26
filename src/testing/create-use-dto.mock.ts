import { Role } from "../enums/role.enum";
import { CreateUserDTO } from "../user/DTO/create-user.dto";

export const createUserDTO: CreateUserDTO = {
  name: 'Sarah Johnson',
  email: 'sarah.johnson@example.com',
  password: '$2b$10$IfhUx0aeFKiJVoiaCpGwy.J9LZzGiOd6PyQX/u0RkcjfEUjhr0FHS',
  role: Role.Admin,
  birthAt: '1992-12-10',
}