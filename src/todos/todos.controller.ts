/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Patch, Param } from '@nestjs/common';
import { TodoService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { IdDto } from './dto/id.dto';


@Controller('todos')
export class TodoController {
    constructor(private readonly TodoService:TodoService){};

    @Post()
    create(@Body() createTodoDto:CreateTodoDto){
        return this.TodoService.create(createTodoDto);
    }

    @Get(':id')
    get(@Param('id') idDto:IdDto){
        const data = this.TodoService.findOne(idDto);
        return data
    }

    @Patch(':id')
    delete(@Param('id') IdDto:IdDto){
        return this.TodoService.delete(IdDto)
    }
}
