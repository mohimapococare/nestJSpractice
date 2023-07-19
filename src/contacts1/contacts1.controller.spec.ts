import { Test, TestingModule } from '@nestjs/testing';
import { Contacts1Controller } from './contacts1.controller';
import { Contacts1Service } from './contacts1.service';

describe('Contacts1Controller', () => {
  let controller: Contacts1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Contacts1Controller],
      providers: [Contacts1Service],
    }).compile();

    controller = module.get<Contacts1Controller>(Contacts1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
