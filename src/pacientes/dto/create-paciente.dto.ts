import { IsDateString, IsNumber, IsString } from "class-validator";

export class CreatePacienteDto {

  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsNumber()
  telefono: number;

  @IsString()
  correo: string;

  @IsString()
  prevision: string;

  @IsString()
  evaluacion: string;

  @IsString()
  objetivo: string;

  @IsString()
  diagnostico: string;

  @IsDateString()
  fecha_nacimiento: Date;

  @IsDateString()
  fecha_ingreso: Date;
}
