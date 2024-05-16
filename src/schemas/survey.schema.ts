import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SurveyDocument = HydratedDocument<Survey>;

@Schema()
class Element {
  @Prop()
  type: string;

  @Prop()
  name: string;

  @Prop()
  title?: string;
}

@Schema()
class SurveyPage {
  @Prop()
  name?: string;

  @Prop({ type: Element })
  elements: Element[];
}

@Schema()
export class Json {
  @Prop()
  pages?: SurveyPage[];

  @Prop()
  title?: string;

  @Prop()
  logo?: string;

  @Prop()
  cookieName?: string;
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
