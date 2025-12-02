import { Controller, Res , Get } from '@nestjs/common';
import { EspecialidadService } from './especialidad.service';


@Controller('especialidad')
export class EspecialidadController {
  constructor(private readonly especialidadService: EspecialidadService) {}

  @Get()
    getEspecialidad(){
     return this.especialidadService.getEspecialidadDB()
  }

}
