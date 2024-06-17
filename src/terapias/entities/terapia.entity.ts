import { Evaluacion } from "src/evaluaciones/entities/evaluacion.entity";
import { Paciente } from "src/pacientes/entities/paciente.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Terapia {

  @PrimaryGeneratedColumn()
  terapia_id: number;

  @Column()
  n_de_sesion: number;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  fecha: Date;

  @Column({ type: 'time', default: () => 'CURRENT_TIME' })
  hora: Date;

  @Column()
  descripcion: string;

  @ManyToOne(() => Paciente, paciente => paciente.evaluacion)
  @JoinColumn({ name: 'paciente_fk' })
  paciente: Paciente;

  @ManyToOne(() => Evaluacion, evaluacion => evaluacion.terapia)
  @JoinColumn({ name: 'evaluacion_fk' })
  evaluacion: Evaluacion;
}
