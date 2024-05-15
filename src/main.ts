import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors({
  //   origin: 'https://surveys-web-two.vercel.app/',
  //   methods: ['OPTIONS', 'PUT', 'POST', 'PATCH', 'GET'],
  // });
  await app.listen(3000);
}
bootstrap();
