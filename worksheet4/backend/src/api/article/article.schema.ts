import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Document<Article>;

@Schema()
export class Article {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  authors: string;

  @Prop({ required: true })
  source: string;

  @Prop({ required: true })
  pubyear: number;

  @Prop({ required: true })
  doi: string;

  @Prop({ required: true })
  claim: string;

  @Prop({ required: true })
  evidence: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
