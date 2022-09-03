import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Medicine } from 'src/typeorm/typeorm';
import { Repository } from 'typeorm';
import { CreateMedicineDto } from './dto/medicine.dto';

@Injectable()
export class MedicineService {
    constructor(
        @InjectRepository(Medicine) private medicinerepo:Repository<Medicine>){}

    createMedicine(body:CreateMedicineDto){
        const user=this.medicinerepo.create(body);
        return this.medicinerepo.save(user);
    }
}
