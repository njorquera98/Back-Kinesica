import { Module } from '@nestjs/common';
import { TerapiasService } from './terapias.service';
import { TerapiasController } from './terapias.controller';

@Module({
  controllers: [TerapiasController],
  providers: [TerapiasService],
})
export class TerapiasModule {}
