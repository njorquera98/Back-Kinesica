import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsultasService } from './consultas.service';
import { ConsultasController } from './consultas.controller';
import { Consulta } from './entities/consulta.entity';
import { PacientesModule } from 'src/pacientes/pacientes.module';
import { PacientesService } from 'src/pacientes/pacientes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Consulta]), PacientesModule],
  controllers: [ConsultasController],
  providers: [ConsultasService, PacientesService],
  //exports: [TypeOrmModule],
})
export class ConsultasModule { }
