import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EspecialidadModule } from './especialidad/especialidad.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Especialidad } from './especialidad/especialidad.entity';


@Module({
  imports: [ 
      TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "turnera",
      synchronize: true,
      entities:[Especialidad]
    }) ,EspecialidadModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
