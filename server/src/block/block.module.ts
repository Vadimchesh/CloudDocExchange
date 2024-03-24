import { Module } from '@nestjs/common';
import { BlockService } from './block.service';
import { BlockController } from './block.controller';
import { S3Module } from 'src/s3/s3.module';

@Module({
  controllers: [BlockController],
  providers: [BlockService],
  imports: [S3Module],
})
export class BlockModule {}
