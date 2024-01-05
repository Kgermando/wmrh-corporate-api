import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const isProduction = process.env.NODE_ENV === "production";
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.enableCors({
    origin: isProduction
      ? 'https://wmrh-corporte.web.app'
      : 'http://localhost:4200',
    credentials: true
  });
  const HOST = process.env.HOST || 3001;
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`App listening on url ${PORT} ${PORT}`);
    console.log('Press Ctrl+C to quit.');
  });
}
bootstrap();
