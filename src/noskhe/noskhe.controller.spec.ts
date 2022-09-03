import { Test, TestingModule } from '@nestjs/testing';
import { NoskheController } from './noskhe.controller';

describe('NoskheController', () => {
  let controller: NoskheController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoskheController],
    }).compile();

    controller = module.get<NoskheController>(NoskheController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
