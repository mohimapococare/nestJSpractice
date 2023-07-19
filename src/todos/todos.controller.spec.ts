/* eslint-disable prettier/prettier */

import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todos.controller';
import { TodoService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { IdDto } from './dto/id.dto';

describe('TodoController',()=>{

  let todoController: TodoController;
  let todoService: TodoService;

  const mockTodo = {
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
      controllers: [TodoController],
      providers: [
        {
          provide: TodoService,
          useValue: mockTodoService,
        },
      ],
    }).compile();

    todoService = module.get<TodoService>(TodoService);
    todoController = module.get<TodoController>(TodoController);
  });

  it('should be defined', () => {
    expect(todoController).toBeDefined();
  });

  describe('createTodo', () => {
    it('should create a new Todo', async () => {
      const newTodo = {
        title:"hello",
        status:true,
        description:"hello to the world",
        user:"61c0ccf11d7bf83d153d7c06"
      };
      const idDto: IdDto = {
        id: '64ae4b759caa3afe9ae3d6ab',
      };

      mockTodoService.create = jest.fn().mockResolvedValueOnce({...mockTodo,idDto});

      const result = await todoController.create(
        newTodo as CreateTodoDto
      );

      expect(todoService.create).toHaveBeenCalled();
      expect(result).toEqual({...mockTodo,idDto});
    });
  });

  describe('getTodoById', () => {
    it('should get a Todo by ID', async () => {

      const idDto: IdDto = {
        id: '64ae4b759caa3afe9ae3d6ab',
      };
      mockTodoService.findOne = jest.fn().mockResolvedValueOnce({...mockTodo,idDto});
      const result = await todoController.get(idDto);

      expect(todoService.findOne).toHaveBeenCalled();
      expect(result).toEqual({...mockTodo,idDto});
    });
  });

  describe('deleteTodoByID', () => {
    
    it('should delete a Todo by ID', async () => {
      const idDto: IdDto = {
        id: "64ae4b759caa3afe9ae3d6ab", // Replace with a valid Todo ID
      };
      mockTodoService.delete = jest.fn().mockResolvedValueOnce({ message: 'deleted successfully' });
      const result = await todoController.delete(idDto);
      expect(todoService.findOne).toHaveBeenCalledWith(idDto);
      expect(todoService.delete).toHaveBeenCalledWith(idDto);
      expect(result).toEqual({ message: 'deleted successfully' });
    });

    it('should return an error message when Todo is not found', async () => {
      const idDto: IdDto = {
        id: '64ae4b759caa3afe9ae3d6ac', 
      };

      const expectedResult:any = {
        todoID:'64ae4b759caa3afe9ae3d6ac',
        message: 'Todo Not Found' 
      }

      todoService.delete = jest.fn().mockResolvedValueOnce({ todoID: idDto.id, message: 'Todo Not Found' });
      const result = await todoController.delete(idDto);
      expect(result).toEqual(expectedResult);
    });

  });

})