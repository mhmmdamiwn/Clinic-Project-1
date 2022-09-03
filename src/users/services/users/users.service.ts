import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User, Clinic, Medicine, Patient, Doctor, Noskhe } from 'src/typeorm/typeorm';
import {  Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepo:Repository<User>,
        @InjectRepository(Clinic) private clinicRepo:Repository<Clinic>,
        @InjectRepository(Medicine) private medicinerepo:Repository<Medicine>,
        @InjectRepository(Patient) private patientRepo:Repository<Patient>,
        @InjectRepository(Doctor) private doctorRepo:Repository<Doctor>,
        @InjectRepository(Noskhe) private noskheRepo:Repository<Noskhe>,
       ){}
   

    findPatientById(id:string){
        const patient= this.patientRepo.findOne({
            where:{
                patient_codemelli:id,
            }
        });
        if(patient)return patient;
    }
    findPatients(){
        const patients=this.patientRepo.find();
        return patients;
    }
    findDoctorById(id:string){
        const doctor= this.doctorRepo.findOne({
            where:{
                doctor_codemelli:id,
            }
        });
        if(doctor)return doctor;
    }
    findDoctors(){
        const doctors=this.doctorRepo.find();
        return doctors;
    }
   findAllNoskheByDoctorId(id:string){
    const doctor= this.doctorRepo.findOne({
        relations:["noskhe","noskhe.patient"],
        where:{
            doctor_codemelli:id,
        }
    });
    if(doctor)return doctor;

   }

}
