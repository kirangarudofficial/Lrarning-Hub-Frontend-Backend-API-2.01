import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { MICROSERVICE_TOKENS } from '@shared/constants';
import { ApiResponseUtil } from '@shared/utils';

@Injectable()
export class MediaService {
  constructor(
    @Inject(MICROSERVICE_TOKENS.MEDIA_SERVICE)
    private mediaServiceClient: ClientProxy,
  ) {}

  async uploadSingleFile(userId: string, file: Express.Multer.File, metadata?: any) {
    try {
      const result = await firstValueFrom(
        this.mediaServiceClient.send('upload_single_file', {
          userId,
          file: {
            originalName: file.originalname,
            mimeType: file.mimetype,
            size: file.size,
            buffer: file.buffer,
          },
          metadata,
        }),
      );

      return ApiResponseUtil.success(result);
    } catch (error) {
      throw error;
    }
  }

  async uploadMultipleFiles(userId: string, files: Express.Multer.File[], metadata?: any) {
    try {
      const fileData = files.map(file => ({
        originalName: file.originalname,
        mimeType: file.mimetype,
        size: file.size,
        buffer: file.buffer,
      }));

      const result = await firstValueFrom(
        this.mediaServiceClient.send('upload_multiple_files', {
          userId,
          files: fileData,
          metadata,
        }),
      );

      return ApiResponseUtil.success(result);
    } catch (error) {
      throw error;
    }
  }

  async uploadVideo(userId: string, file: Express.Multer.File, metadata: any) {
    try {
      const result = await firstValueFrom(
        this.mediaServiceClient.send('upload_video', {
          userId,
          file: {
            originalName: file.originalname,
            mimeType: file.mimetype,
            size: file.size,
            buffer: file.buffer,
          },
          metadata,
        }),
      );

      return ApiResponseUtil.success(result);
    } catch (error) {
      throw error;
    }
  }

  async getFile(fileId: string) {
    try {
      const result = await firstValueFrom(
        this.mediaServiceClient.send('get_file', { fileId }),
      );

      return ApiResponseUtil.success(result);
    } catch (error) {
      throw error;
    }
  }

  async getUserFiles(userId: string) {
    try {
      const result = await firstValueFrom(
        this.mediaServiceClient.send('get_user_files', { userId }),
      );

      return ApiResponseUtil.success(result);
    } catch (error) {
      throw error;
    }
  }
}