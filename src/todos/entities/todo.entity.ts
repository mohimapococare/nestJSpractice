/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { TodoDocument, Todo } from './todo.schema';
import { IdDto } from '../dto/id.dto';


@Injectable()
export class TodoEntity{
    constructor(
        @InjectModel(Todo.name, 'todos')
        private readonly TodoModel: Model<TodoDocument>
    ){}

    async create(todo:CreateTodoDto):Promise<TodoDocument>{
        return this.TodoModel.create({...todo,isDeleted:false})
    }

    async findOne(param:IdDto):Promise<TodoDocument>{
        return this.TodoModel.findById({_id:param.id})
    }

    async delete(param:IdDto):Promise<TodoDocument>{
        return this.TodoModel.findByIdAndUpdate(
            { _id:param.id },
            { isDeleted:true}
        )
    }

}

