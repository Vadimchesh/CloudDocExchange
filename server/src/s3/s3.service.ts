import { Injectable } from '@nestjs/common';
import {
  S3Client,
  PutObjectCommand,
  HeadObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

@Injectable()
export class S3Service {
  AWS_S3_BUCKET = process.env.AWS_S3_BUCKET;
  s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });

  async getPresignedUrl(Key: string) {
    const command = new PutObjectCommand({ Bucket: this.AWS_S3_BUCKET, Key });
    return getSignedUrl(this.s3, command, { expiresIn: 3600 });
  }

  async createFolder(Bucket: string, Key: string) {
    const command = new PutObjectCommand({ Bucket, Key });
    return this.s3.send(command);
  }

  async uploadFiles(files: Array<Express.Multer.File>) {
    return await Promise.all(
      files.map(async (file) => {
        return await this.uploadFile(file);
      }),
    );
  }

  async existsFolder(Bucket, Key) {
    const command = new HeadObjectCommand({ Bucket, Key });

    try {
      await this.s3.send(command);
      return true;
    } catch (error) {
      if (error.name === 'NotFound') {
        return false;
      } else {
        throw error;
      }
    }
  }

  async createFolderIfNotExist(Bucket, Key) {
    if (!(await this.existsFolder(Bucket, Key))) {
      return this.createFolder(Bucket, Key);
    }
  }

  async deleteFolder(Bucket, Key) {
    const client = new S3Client();
    const command = new DeleteObjectCommand({ Bucket, Key });
    return client.send(command);
  }

  async uploadFile(file) {
    const fileName = file.originalname;
    const params = {
      Bucket: this.AWS_S3_BUCKET,
      Key: fileName,
      Body: file,
      ContentDisposition: 'inline',
    };

    try {
      const command = new PutObjectCommand(params);
      const s3Response = await this.s3.send(command);
      return s3Response;
    } catch (e) {
      console.log(e);
    }
  }

  async upload(files) {
    try {
      const response = await this.uploadFiles(files);
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  uploadLargeFile() {
    return `https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/javascriptv3/example_code/s3/scenarios/multipart-upload.js`;
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
