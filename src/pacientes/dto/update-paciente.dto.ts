import { PartialType } from '@nestjs/mapped-types';
import { CreatePacienteDto } from './create-paciente.dto';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdatePacienteDto extends PartialType(CreatePacienteDto) {

  @IsString()
  @IsOptional()
  @MinLength(1)
  nombre?: string;

  @IsString()
  @IsOptional()
  @MinLength(1)
  apellido?: string;

  @IsString()
  @IsOptional()
  @MinLength(1)
  telefono?: string;

  @IsString()
  @IsOptional()
  @MinLength(1)
  correo?: string;

  @IsString()
  @IsOptional()
  @MinLength(1)
  fecha_nacimiento?: Date;

  @IsString()
  @IsOptional()
  @MinLength(1)
  fecha_ingreso?: Date;

  @IsString()
  @IsOptional()
  @MinLength(1)
  prevision?: string;

  @IsString()
  @IsOptional()
  @MinLength(1)
  evaluacion?: string;

  @IsString()
  @IsOptional()
  @MinLength(1)
  objetivo?: string;

  @IsString()
  @IsOptional()
  @MinLength(1)
  diagnostico?: string;
}
