import { Column, Entity } from "typeorm";

@Entity()
export class Paciente {

  @Column({ primary: true, generated: true })
  paciente_id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  telefono: string;

  @Column()
  correo: string;

  @Column()
  fecha_nacimiento: Date;

  @Column()
  fecha_ingreso: Date;

  @Column()
  prevision: string;

  @Column()
  evaluacion: string;

  @Column()
  objetivo: string;

  @Column()
  diagnostico: string;

}
