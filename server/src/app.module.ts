import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlockModule } from './block/block.module';
import { UsersModule } from './users/users.module';
import { HealthModule } from './health/health.module';
import { S3Module } from './s3/s3.module';

@Module({
  imports: [BlockModule, UsersModule, HealthModule, S3Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
