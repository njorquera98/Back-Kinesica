import { Injectable } from '@nestjs/common';
import { CreateTerapiaDto } from './dto/create-terapia.dto';
import { UpdateTerapiaDto } from './dto/update-terapia.dto';

@Injectable()
export class TerapiasService {
  create(createTerapiaDto: CreateTerapiaDto) {
    return 'This action adds a new terapia';
  }

  findAll() {
    return `This action returns all terapias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} terapia`;
  }

  update(id: number, updateTerapiaDto: UpdateTerapiaDto) {
    return `This action updates a #${id} terapia`;
  }

  remove(id: number) {
    return `This action removes a #${id} terapia`;
  }
}
