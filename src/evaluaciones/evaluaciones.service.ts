import { Injectable } from '@nestjs/common';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';

@Injectable()
export class EvaluacionesService {
  create(createEvaluacionDto: CreateEvaluacionDto) {
    return 'This action adds a new evaluacione';
  }

  findAll() {
    return `This action returns all evaluaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evaluacione`;
  }

  update(id: number, updateEvaluacionDto: UpdateEvaluacionDto) {
    return `This action updates a #${id} evaluacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} evaluacione`;
  }
}
