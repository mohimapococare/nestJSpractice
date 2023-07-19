/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { TodoController } from "./todos.controller";
import { TodoService } from "./todos.service";
import { TodoEntity } from "./entities/todo.entity";
import { MongooseModule } from "@nestjs/mongoose";
import { Todo, TodoSchema } from "./entities/todo.schema";

@Module({
      imports: [
            MongooseModule.forFeature(
              [{ name: Todo.name, schema: TodoSchema }],
              'todos',
            ),
      ],
      controllers: [TodoController],
      providers: [TodoService,TodoEntity],
})
export class TodoModules{}
