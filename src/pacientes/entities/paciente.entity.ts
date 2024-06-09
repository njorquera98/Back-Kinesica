import { Consulta } from "src/consultas/entities/consulta.entity";
import { Sesion } from "src/sesiones/entities/sesion.entity";
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

  @Column({ type: 'date' })
  fecha_ingreso: Date;

  @Column()
  prevision: string;

  @Column()
  evaluacion: string;

  @Column()
  objetivo: string;

  @Column()
  diagnostico: string;

  @OneToMany(() => Sesion, sesion => sesion.paciente)
  sesiones: Sesion[];

  @OneToMany(() => Consulta, consulta => consulta.paciente)
  consultas: Consulta[];
}
