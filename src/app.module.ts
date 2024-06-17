import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PacientesModule } from './pacientes/pacientes.module';
import { SesionesModule } from './sesiones/sesiones.module';
import { ConsultasModule } from './consultas/consultas.module';
import { EvaluacionesModule } from './evaluaciones/evaluaciones.module';
import { TerapiasModule } from './terapias/terapias.module';
import { AntecedentesModule } from './antecedentes/antecedentes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get('DB_PORT')),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        autoLoadEntities: true,
      }),
      inject: [ConfigService]
    }),

    PacientesModule,
    SesionesModule,
    ConsultasModule,
    EvaluacionesModule,
    TerapiasModule,
    AntecedentesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
