import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CompaniesDocument = HydratedDocument<Companies>;

@Schema({
  timestamps: true,
})
export class Companies {
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  phone: string;

  @Prop({
    trim: true,
  })
  address: string;

  @Prop()
  web: string;

  @Prop({
    default: true,
  })
  is_active: boolean;
}

export const CompaniesSchema = SchemaFactory.createForClass(Companies);
