import { Test, TestingModule } from '@nestjs/testing';
import { Contacts1Service } from './contacts1.service';

describe('Contacts1Service', () => {
  let service: Contacts1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Contacts1Service],
    }).compile();

    service = module.get<Contacts1Service>(Contacts1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
