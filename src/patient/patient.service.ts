import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from 'src/typeorm/typeorm';
import { Repository } from 'typeorm';
import { CreatePatientDto } from './dto/patient.dto';

@Injectable()
export class PatientService {
    constructor(
        @InjectRepository(Patient) private patientRepo:Repository<Patient>,
){}

        createPatient(body:CreatePatientDto){
            const user=this.patientRepo.create(body);
            user.signdate=new Date();
            user.birth=new Date();
            return this.patientRepo.save(user);
        }
    }
