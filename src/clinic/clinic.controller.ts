import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { CreateClinicDto } from './dto/clinic.dto';

@Controller('clinic')
export class ClinicController {
     constructor(private readonly clinicService:ClinicService){}
    @Post("create")
    @UsePipes(ValidationPipe)
    async createClinic(@Body()body:CreateClinicDto){
        return this.clinicService.createClinic(body);
    }
}
