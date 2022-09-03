import { Body, ClassSerializerInterceptor, Controller, Post, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto, SerializedDoctor } from './dto/createdoctor.dto';

@Controller('doctor')
export class DoctorsController {
    constructor (private readonly doctorService:DoctorsService){}
    @UsePipes(ValidationPipe)
    @UseInterceptors(ClassSerializerInterceptor)
    @Post("create")
    @UsePipes(ValidationPipe)
    async createDoctor(@Body()body:CreateDoctorDto){
        const doctor= await this.doctorService.createDoctor(body);
        return new SerializedDoctor(doctor);
    }
}
