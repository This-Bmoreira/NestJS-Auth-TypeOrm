import { Injectable } from '@nestjs/common';
import { writeFile } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class FileService {
  getDestinationPath() {
    return join(__dirname, '..', '..', 'storage', 'photos');
  }

  async upload(photo: Express.Multer.File, filePath: string) {
    return writeFile(filePath, photo.buffer);

  }
}