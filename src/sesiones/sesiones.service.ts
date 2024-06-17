import { Injectable } from '@nestjs/common';
import { CreateSesionDto } from './dto/create-sesion.dto';
import { UpdateSesionDto } from './dto/update-sesion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sesion } from './entities/sesion.entity';
import { Repository } from 'typeorm';
import { Paciente } from 'src/pacientes/entities/paciente.entity';

@Injectable()
export class SesionesService {
  constructor(

    @InjectRepository(Sesion)
    private sesionesRepository: Repository<Sesion>,

    @InjectRepository(Paciente)
    private pacientesRepository: Repository<Paciente>,
  ) { }

  create(createSesionDto: CreateSesionDto) {
    return 'This action adds a new sesion';
  }

  findAll() {
    return `This action returns all sesiones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sesion`;
  }

  update(id: number, updateSesionDto: UpdateSesionDto) {
    return `This action updates a #${id} sesion`;
  }

  remove(id: number) {
    return `This action removes a #${id} sesion`;
  }
}
