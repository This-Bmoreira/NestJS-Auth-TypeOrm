
import { Role } from "../enums/role.enum";
import { UpdatePatchUserDTO } from "../user/DTO/update-patch-user.dto";

export const updatePatchUserDTO: UpdatePatchUserDTO = {
  name: 'Sarah',
  email: 'sarah@example.com',
  password: '111111',
  birthAt: '1990-01-01',
  role: Role.Admin,
}