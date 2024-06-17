import { Module } from '@nestjs/common';
import { SesionesService } from './sesiones.service';
import { SesionesController } from './sesiones.controller';
import { Sesion } from './entities/sesion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacientesModule } from 'src/pacientes/pacientes.module';
import { PacientesService } from 'src/pacientes/pacientes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sesion]), PacientesModule],
  controllers: [SesionesController],
  providers: [SesionesService, PacientesService],
  //exports: [TypeOrmModule],
})
export class SesionesModule { }
