import { Injectable, Inject } from '@nestjs/common';
import { S3Service } from 'src/s3/s3.service';

@Injectable()
export class BlockService {
  @Inject(S3Service)
  private readonly s3Service: S3Service;

  getPresignedUrl(fileName: string) {
    return this.s3Service.getPresignedUrl(fileName);
  }
  findAll() {
    return `This action returns all block`;
  }

  findOne(id: number) {
    return `This action returns a #${id} block`;
  }

  remove(id: number) {
    return `This action removes a #${id} block`;
  }
}
