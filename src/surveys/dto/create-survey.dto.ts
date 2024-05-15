import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSurveyDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  json: any;
}
