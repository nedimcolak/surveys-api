import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ResultDocument = HydratedDocument<Result>;

@Schema()
export class Result {
  @Prop()
  surveyId: string;

  @Prop({ type: Object })
  surveyResult: object;
}

export const ResultSchema = SchemaFactory.createForClass(Result);
