import { Test, TestingModule } from '@nestjs/testing';
import { TerapiasService } from './terapias.service';

describe('TerapiasService', () => {
  let service: TerapiasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TerapiasService],
    }).compile();

    service = module.get<TerapiasService>(TerapiasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
