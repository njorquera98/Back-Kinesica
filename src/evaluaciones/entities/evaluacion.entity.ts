import { Paciente } from "src/pacientes/entities/paciente.entity";
import { Terapia } from "src/terapias/entities/terapia.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Evaluacion {

  @PrimaryGeneratedColumn()
  evaluacion_id: number;

  @Column()
  fecha_ingreso: Date;

  @Column()
  objetivo: string;

  @Column()
  evaluacion: string;

  @Column()
  diagnostico: string;

  @ManyToOne(() => Paciente, paciente => paciente.evaluacion)
  @JoinColumn({ name: 'paciente_fk' })
  pacientes: Paciente;

  @OneToMany(() => Terapia, terapia => terapia.evaluacion)
  terapia: Terapia[];


}
