import { Test, TestingModule } from '@nestjs/testing';
import { NoskheService } from './noskhe.service';

describe('NoskheService', () => {
  let service: NoskheService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoskheService],
    }).compile();

    service = module.get<NoskheService>(NoskheService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
