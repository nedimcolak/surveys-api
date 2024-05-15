import { Injectable } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Survey } from 'src/schemas/survey.schema';
import { Model } from 'mongoose';
import { ObjectId } from 'mongoose';
import { toDataURL } from 'qrcode';

@Injectable()
export class SurveysService {
  constructor(@InjectModel(Survey.name) private surveyModel: Model<Survey>) {}

  async create(createSurveyDto: CreateSurveyDto) {
    const survey = await this.surveyModel.create(createSurveyDto);
    const qrCode = await toDataURL(
      `https://surveys-web-two.vercel.app/run/${survey._id.toString()}`,
    );
    survey.qrCode = qrCode;
    survey.save();

    return survey;
  }

  findAll() {
    return this.surveyModel.find().exec();
  }

  findOne(id: string) {
    return this.surveyModel.findById(id).exec();
  }

  update(id: string, updateSurveyDto: UpdateSurveyDto) {
    return this.surveyModel.updateOne({ _id: id }, updateSurveyDto);
  }

  remove(id: string) {
    return this.surveyModel.deleteOne({ _id: id });
  }
}
