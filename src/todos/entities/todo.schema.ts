/* eslint-disable prettier/prettier */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type TodoDocument = HydratedDocument<Todo>;

export enum Status {
  TRUE = "TRUE",
  FALES = "FALSE",
}

@Schema({ timestamps: true })
export class Todo {
  @Prop()
  title: string;

  @Prop()
  user: string;

  @Prop()
  description: string;

  @Prop()
  status: boolean;

  @Prop()
  isDeleted:true
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
