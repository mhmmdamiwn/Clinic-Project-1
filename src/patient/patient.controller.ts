import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePatientDto } from './dto/patient.dto';
import { PatientService } from './patient.service';

@Controller('patient')
export class PatientController {
    constructor(private readonly patientService:PatientService){}
    @Post("create")
    @UsePipes(ValidationPipe)
    async createPatient(@Body()body:CreatePatientDto){
        return this.patientService.createPatient(body);
    }
   
}
