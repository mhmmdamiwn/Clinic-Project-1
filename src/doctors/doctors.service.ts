import { Injectable, SerializeOptions } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { identity } from 'rxjs';
import { Doctor, Clinic } from 'src/typeorm/typeorm';
import { Repository } from 'typeorm';
import { CreateDoctorDto, SerializedDoctor } from './dto/createdoctor.dto';

@Injectable()
export class DoctorsService {
    constructor(
        @InjectRepository(Doctor) private doctorRepo:Repository<Doctor>,
        @InjectRepository(Clinic) private clinicRepo:Repository<Clinic>
        ){}
    async createDoctor(body:CreateDoctorDto){
        const doctor=this.doctorRepo.create(body);
        doctor.birth=new Date();
        doctor.signdate=new Date();
        doctor.password=body.password;
       const foundClinic=await this.clinicRepo.findOne({
            where:{
                clinic_id:body.clinic_id
            }
        });
        if(foundClinic) doctor.clinic=foundClinic;
        this.doctorRepo.save(doctor);
        return new SerializedDoctor(doctor);
    }
}
