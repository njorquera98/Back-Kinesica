import { Paciente } from "src/pacientes/entities/paciente.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Consulta {

  @PrimaryGeneratedColumn()
  consulta_id: number;

  @Column()
  diagnostico: string;

  @Column()
  indicaciones: string;

  @Column()
  tratamiento: string;

  @ManyToOne(() => Paciente, paciente => paciente.consultas)
  @JoinColumn({ name: 'paciente_fk' })
  paciente: Paciente;
}
