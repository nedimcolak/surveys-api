import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { SurveyJSON } from './survey-json.dto';

export class CreateSurveyDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  json: SurveyJSON;
}
