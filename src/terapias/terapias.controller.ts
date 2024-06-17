import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TerapiasService } from './terapias.service';
import { CreateTerapiaDto } from './dto/create-terapia.dto';
import { UpdateTerapiaDto } from './dto/update-terapia.dto';

@Controller('terapias')
export class TerapiasController {
  constructor(private readonly terapiasService: TerapiasService) {}

  @Post()
  create(@Body() createTerapiaDto: CreateTerapiaDto) {
    return this.terapiasService.create(createTerapiaDto);
  }

  @Get()
  findAll() {
    return this.terapiasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.terapiasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTerapiaDto: UpdateTerapiaDto) {
    return this.terapiasService.update(+id, updateTerapiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.terapiasService.remove(+id);
  }
}
