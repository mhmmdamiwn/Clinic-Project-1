import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Clinic } from 'src/typeorm/typeorm';
import { Repository } from 'typeorm';
import { CreateClinicDto } from './dto/clinic.dto';

@Injectable()
export class ClinicService {
    constructor(
        @InjectRepository(Clinic) private clinicRepo:Repository<Clinic>
    ){}

    createClinic(body:CreateClinicDto){
        const user=this.clinicRepo.create(body);
        return this.clinicRepo.save(user);
    }
}
