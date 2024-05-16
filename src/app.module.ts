import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurveysModule } from './surveys/surveys.module';
import { MongooseModule } from '@nestjs/mongoose';
import { QrcodeService } from './qrcode/qrcode.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ResultsModule } from './results/results.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/surveydb'),
    SurveysModule,
    UserModule,
    AuthModule,
    ResultsModule,
  ],
  controllers: [AppController],
  providers: [AppService, QrcodeService],
})
export class AppModule {}
