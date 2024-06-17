import { Module } from '@nestjs/common';
import { AntecedentesService } from './antecedentes.service';
import { AntecedentesController } from './antecedentes.controller';

@Module({
  controllers: [AntecedentesController],
  providers: [AntecedentesService],
})
export class AntecedentesModule {}
