import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurveysModule } from './surveys/surveys.module';
import { MongooseModule } from '@nestjs/mongoose';
import { QrcodeService } from './qrcode/qrcode.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/surveydb'),
    SurveysModule,
  ],
  controllers: [AppController],
  providers: [AppService, QrcodeService],
})
export class AppModule {}
