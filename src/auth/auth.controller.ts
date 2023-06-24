import { BadRequestException, Body, Controller, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { User } from "../decorators/user.decorator";
import { FileService } from "../file/file.service";
import { AuthGuard } from "../guards/auth.guard";
import { UserService } from "../user/user.service";
import { AuthForgetDTO } from "./DTO/auth-forget.dto";
import { AuthLoginDTO } from "./DTO/auth-login.dto";
import { AuthRegisterDTO } from "./DTO/auth-register.dto";
import { AuthResetDto } from "./DTO/auth-reset.dto";
import { AuthService } from "./auth.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { join } from "path";

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly fileService: FileService
  ) { }
  @Post('login')
  async login(@Body() { email, password }: AuthLoginDTO) {
    return this.authService.login(email, password);
  }

  @Post('register')
  async register(@Body() body: AuthRegisterDTO) {
    return this.authService.register(body);
  }

  @Post('forget')
  async forget(@Body() { email }: AuthForgetDTO) {
    return this.authService.forget(email);
  }

  @Post('reset')
  async reset(@Body() { password, token }: AuthResetDto) {
    return this.authService.reset(password, token);
  }

  @UseGuards(AuthGuard)
  @Post('me')
  async me(@User('id') user) {
    return { user }
  }

  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(AuthGuard)
  @Post('photo')
  async uploadPhoto(@User() user, @UploadedFile() photo: Express.Multer.File) {
    const filePath = join(process.cwd(), 'storage', 'photo', `photo-${user.id}.png`);
    // await writeFile(filePath, photo.buffer);

    try {
      await this.fileService.upload(photo, filePath)
    } catch (e) {
      throw new BadRequestException(e)
    }
    return { success: true }
  }
}