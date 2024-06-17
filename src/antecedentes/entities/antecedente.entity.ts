import { Paciente } from "src/pacientes/entities/paciente.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Antecedente {

  @PrimaryGeneratedColumn()
  antecedente_id: number;

  @Column()
  cardiovascular: string;

  @Column()
  pulmonares: string;

  @Column()
  digestivos: string;

  @Column()
  diabetes: string;

  @Column()
  renales: string;

  @Column()
  quirurjicos: string;

  @Column()
  alergicos: string;

  @Column()
  transfusiones: string;

  @Column()
  medicamentos: string;

  @Column()
  actividad_fisica: string;

  @Column()
  alcohol: string;

  @Column()
  tabaquismo: string;

  @Column()
  drogas: string;

  @Column()
  inmunizaciones: string;

  @ManyToOne(() => Paciente, paciente => paciente.evaluacion)
  @JoinColumn({ name: 'paciente_fk' })
  paciente: Paciente;
}
