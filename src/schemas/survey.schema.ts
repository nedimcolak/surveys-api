import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SurveyDocument = HydratedDocument<Survey>;

@Schema()
class Json {
  @Prop()
  pages?: any[];
}

@Schema()
export class Survey {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  qrCode: string;

  @Prop()
  json: Json;
}

export const SurveySchema = SchemaFactory.createForClass(Survey);
