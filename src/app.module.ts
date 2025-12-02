import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EspecialidadModule } from './especialidad/especialidad.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Especialidad } from './especialidad/especialidad.entity';
import { DoctorModule } from './doctor/doctor.module';
import { ObraSocialModule } from './obra-social/obra-social.module';

@Module({
  imports: [DoctorModule,EspecialidadModule, ObraSocialModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}