import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import { RequestMethod } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api', {
    exclude: [{ path: 'health', method: RequestMethod.GET }],
  });
  app.use(cors({ origin: 'http://localhost:5173' }));

  await app.listen(3000);
}
bootstrap();
