import { Antecedente } from "src/antecedentes/entities/antecedente.entity";
import { Consulta } from "src/consultas/entities/consulta.entity";
import { Evaluacion } from "src/evaluaciones/entities/evaluacion.entity";
import { Sesion } from "src/sesiones/entities/sesion.entity";
import { Terapia } from "src/terapias/entities/terapia.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Paciente {

  @PrimaryGeneratedColumn()
  paciente_id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  telefono: string;

  @Column()
  correo: string;

  @Column({ type: 'date' })
  fecha_nacimiento: Date;

  @Column()
  prevision: string;

  @OneToMany(() => Antecedente, antecedente => antecedente.paciente)
  antecedentes: Antecedente[];

  @OneToMany(() => Consulta, consulta => consulta.paciente)
  consultas: Consulta[];

  @OneToMany(() => Evaluacion, evaluacion => evaluacion.pacientes)
  evaluacion: Evaluacion[];

  @OneToMany(() => Sesion, sesion => sesion.paciente)
  sesiones: Sesion[];

  @OneToMany(() => Terapia, terapia => terapia.paciente)
  terapias: Terapia[];


}
