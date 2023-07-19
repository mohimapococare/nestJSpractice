/* eslint-disable prettier/prettier */

import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todos.controller';
import { TodoService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { IdDto } from './dto/id.dto';
import { getModelToken } from '@nestjs/mongoose';
import { Todo } from './entities/todo.schema';
import { Model } from 'mongoose';

describe('TodoController',()=>{

    let todoController: TodoController;
    let todoService: TodoService;
    let model: Model<Todo>;

    const mockTodo:any = {
      user: '61c0ccf11d7bf83d153d7c06',
      title: 'hello',
      description: 'Book Description',
      status:true,
      isDeleted:false
    };
  
    const mockTodoService = {
      create: jest.fn(),
      findOne: jest.fn(),
      delete: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
              TodoService,
              {
                provide: getModelToken(Todo.name),
                useValue: mockTodo,
              },
            ],
          }).overrideProvider(TodoService).useValue(mockTodoService).compile();

          todoService = module.get<TodoService>(TodoService);
          model = module.get<Model<Todo>>(getModelToken(Todo.name));
    });

    it('should be defined', () => {
        expect(todoService).toBeDefined();
    });

    describe('create', () => {
        it('should create and return a book', async () => {
          const newTodo = {
            title:"hello",
            status:true,
            description:"hello to the world",
            user:"61c0ccf11d7bf83d153d7c06"
          };
    
          jest
            .spyOn(todoService,'create')
            .mockImplementationOnce(() => Promise.resolve(mockTodo));
    
          const result = await todoService.create(
            newTodo as CreateTodoDto,
          );
    
          expect(result).toEqual(mockTodo);
        });
    });

    
    

})