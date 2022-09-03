import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient, Doctor, Noskhe, Medicine } from 'src/typeorm/typeorm';
import { Repository } from 'typeorm';
import { CreateNoskheDto } from './dto/noskhe.dto';


@Injectable()
export class NoskheService {
    constructor(
        @InjectRepository(Patient) private patientRepo:Repository<Patient>,
        @InjectRepository(Doctor) private doctorRepo:Repository<Doctor>,
        @InjectRepository(Noskhe) private noskheRepo:Repository<Noskhe>,
        @InjectRepository(Medicine) private medicineRepo:Repository<Medicine>
         ){}
        async createNoskhe(body:CreateNoskheDto){
            const newNoskhe=new Noskhe();
            newNoskhe.date=new Date();
            const foundDoctor=await this.doctorRepo.findOne({
                where:{
                    doctor_codemelli:body.doctor_codemelli
                }
            })
            if(foundDoctor){
                if(foundDoctor.password===body.doctor_password)
                newNoskhe.doctor=foundDoctor;
                else  throw new HttpException("password is wrong",HttpStatus.BAD_REQUEST);
            }
            else throw new HttpException("there is no doctor with that id",HttpStatus.BAD_REQUEST);
            const foundPatient=await this.patientRepo.findOne({
                where:{
                    patient_codemelli:body.patient_codemelli
                }
            })
            if(foundPatient)newNoskhe.patient=foundPatient
            else throw new HttpException("there is no patient with that id",HttpStatus.BAD_REQUEST);
            for(var i=0;i<body.medicine_id.length;i++){
            const foundMedicine=await this.medicineRepo.findOne({
                where:{
                    medicine_id:body.medicine_id[i]
                }
            })
            if(!foundMedicine) throw new HttpException("there is no medicine with that id",HttpStatus.BAD_REQUEST);
        }
            newNoskhe.medicine=new Array<Medicine>;
            for(var i=0;i<body.medicine_id.length;i++){
                const medicinee=new Medicine(); 
                medicinee.medicine_id=body.medicine_id[i];
                newNoskhe.medicine.push(medicinee);
             }
            return this.noskheRepo.save( newNoskhe);
        }
}
