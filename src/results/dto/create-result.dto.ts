import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateResultDto {
  @ApiProperty()
  @IsString()
  surveyId: string;

  @ApiProperty()
  surveyResult: object;
}
