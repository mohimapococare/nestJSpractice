/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { TodoEntity } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { IdDto } from './dto/id.dto';


@Injectable()
export class TodoService{
    constructor(
        private readonly todoEntity:TodoEntity
    ){}

    async create(createTodo:CreateTodoDto){
        return this.todoEntity.create(createTodo)
    }

    

    async findOne(idDto:IdDto){
        const data =await this.todoEntity.findOne(idDto);
        return{
            messege:"Found",
            data:data
        }
    }

    async delete(idDto:IdDto){
        const data = await this.todoEntity.findOne(idDto)
        if(data && !data.isDeleted){

            this.todoEntity.delete(idDto)
            return{
                messege:"deleted successfully"
            }
        }else{
            return { todoID: idDto.id, message: 'Todo Not Found' };
        }
    }
}