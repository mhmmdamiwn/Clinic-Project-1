import { Injectable } from "@nestjs/common";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Injectable()
@Entity()
export class Clinic{
    @Column({
        type:"varchar",
        default:"",
        name:"name",
        nullable:false
    })
    name:string;

    @PrimaryGeneratedColumn({
        type:"bigint",
        name:"clinic_id"
    })
    clinic_id:number;

    @Column({
        type:"varchar",
        name:"adrress",
        nullable:false,
        default:""
    })
    address:string;

    @OneToMany(()=>Doctor,doctor=>doctor.clinic)
    doctor:Doctor[];


}
@Entity()
export class Doctor{
    @ManyToOne(()=>Clinic,clinic=>clinic.doctor)
    clinic:Clinic;

    @PrimaryGeneratedColumn({
        type:"bigint",
        name:"doctor_id"
    })
    doctor_id:number;
    @PrimaryColumn({
        type:"varchar",
        name:"doctor_codemelli"
    })
    doctor_codemelli:string;
    @Column({
        type:"varchar",
        default:"",
        name:"name",
        nullable:false
    })
    name:string;
    @Column({
        type:"varchar",
        default:"",
        name:"fname",
        nullable:false
    })
    fname:string;
    @Column({
        type:"varchar",
        default:"",
        name:"doctor_password",
        nullable:false
    })
    password:string;
    @Column({
        type:"boolean",
        name:"sex",
        nullable:false
    })
    sex:boolean;
    @Column({
        type:"date",
        name:"birth",
        nullable:false
    })
    birth:Date;
    @Column({
        type:"bigint",
        name:"phonenumber",
        nullable:false
    })
    phonenumber:number;

    @Column({
        type:"date",
        name:"signdate",
        nullable:false
    })
    signdate:Date;
    @PrimaryColumn({
        type:"varchar",
        name:"nezampezeshki_id"
    })
    nezam_id:string;
    @Column({
        type:"boolean",
        name:"active",
        nullable:false
    })
    isactive:boolean;

    @OneToMany(()=>Noskhe,noskhe=>noskhe.doctor)
    noskhe:Noskhe[];
}
@Entity()
export class Medicine{
    @Column({
        type:"varchar",
        default:"",
        name:"name",
        nullable:false
    })
    name:string;
    @PrimaryGeneratedColumn({
        type:"bigint",
        name:"medicine_id"
    })
    medicine_id:number;

    @ManyToMany(()=>Noskhe,noskhe=>noskhe.medicine)
    noskhe:Noskhe[];
}
@Entity()
export class Patient{
    @OneToMany(()=>Noskhe,(noskhe)=>noskhe.patient)
    noskhe:Noskhe[];
    @PrimaryGeneratedColumn({
        type:"bigint",
        name:"patient_id"
    })
    patient_id:number;
    @PrimaryColumn({
        type:"varchar",
        name:"patient_codemelli"
    })
    patient_codemelli:string;
    
    @Column({
        type:"varchar",
        default:"",
        name:"name",
        nullable:false
    })
    name:string;
    @Column({
        type:"varchar",
        default:"",
        name:"fname",
        nullable:false
    })
    fname:string;
    @Column({
        type:"boolean",
        name:"sex",
        nullable:false
    })
    sex:boolean;
    @Column({
        type:"date",
        name:"birth",
        nullable:false
    })
    birth:Date;
    @Column({
        type:"bigint",
        name:"phonenumber",
        nullable:false
    })
    phonenumber:number;

    @Column({
        type:"date",
        name:"signdate",
        nullable:false
    })
    signdate:Date;
    
}
@Entity()
export class Noskhe{
    @ManyToOne(()=>Doctor,doctor=>doctor.noskhe)
    doctor:Doctor;

    @ManyToOne(()=>Patient,patient=>patient.noskhe)
    patient:Patient;

    @Column({
        type:"date",
        name:"noskhe_date",
        nullable:false,
    })
    date:Date;
    @PrimaryGeneratedColumn({
        type:"bigint",
        name:"noskhe_id"
    })
    noskhe_id:number;

    @ManyToMany(()=>Medicine,medicine=>medicine.noskhe)
    @JoinTable()
    medicine:Medicine[];
}


@Entity()
export class User{
    @PrimaryColumn({
        type:"varchar",
        name:"username",
        default:''
    })
    username:string;
    @Column({
        type:"varchar",
        name:"password",
        default:""
    })
    password:string;
}