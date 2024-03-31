import { Column, Entity } from "typeorm";

@Entity()

export class Sesion {
  @Column({ primary: true, generated: true })
  sesion_id: number;

  @Column()
  paciente_fk: number;

  @Column()
  n_de_sesion: number;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  fecha: Date;

  @Column({ type: 'time', default: () => 'CURRENT_TIME' })
  hora: Date;

  @Column()
  descripcion: string;
}
