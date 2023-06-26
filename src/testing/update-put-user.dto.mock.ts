import { Role } from "../enums/role.enum";
import { UpdatePutUserDTO } from "../user/DTO/update-put-user.dto";

export const updatePutUserDTO: UpdatePutUserDTO = {
  name: 'Sarah Johnson',
  email: 'sarah.johnson@example.com',
  password: '$2b$10$IfhUx0aeFKiJVoiaCpGwy.J9LZzGiOd6PyQX/u0RkcjfEUjhr0FHS',
  role: Role.Admin,
  birthAt: '1992-12-10',
}