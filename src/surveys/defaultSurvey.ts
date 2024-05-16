import { CreateSurveyDto } from './dto/create-survey.dto';

const defaultSurvey: CreateSurveyDto = {
  name: 'New survey',
  json: {
    title: 'New survey',
    pages: [],
  },
};

export default defaultSurvey;
