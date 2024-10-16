
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { TrpcRouter } from 'src/trpc/trpc.router';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configServic = app.get(ConfigService);
  app.enableCors();

  const trpc = app.get(TrpcRouter);
  trpc.applyMiddleware(app);

  const port = configServic.get('PORT') || 3000;
  await app.listen(port);

  console.log(`Server is running on ${await app.getUrl()}`);
}
bootstrap();
