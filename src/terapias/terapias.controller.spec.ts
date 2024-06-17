import { Test, TestingModule } from '@nestjs/testing';
import { TerapiasController } from './terapias.controller';
import { TerapiasService } from './terapias.service';

describe('TerapiasController', () => {
  let controller: TerapiasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TerapiasController],
      providers: [TerapiasService],
    }).compile();

    controller = module.get<TerapiasController>(TerapiasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
