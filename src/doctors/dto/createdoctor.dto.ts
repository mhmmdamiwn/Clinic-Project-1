import { Exclude } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsNumberString, MaxLength, minLength, MinLength } from "class-validator";

export class CreateDoctorDto{

    @IsNotEmpty()
    name:string;
    @IsNotEmpty()
    fname:string;
    @MinLength(10)
    @MaxLength(10)
    @IsNotEmpty()
    doctor_codemelli:string;
    @IsNotEmpty()
    @IsBoolean()
    sex:boolean;
    @MinLength(10)
    @MaxLength(10)
    @IsNotEmpty()
    phonenumber:number;
    @IsNotEmpty()
    nezam_id:string;
    @IsNotEmpty()
    clinic_id:number;
    @IsNotEmpty()
    @IsBoolean()
    isactive:boolean;
    @IsNotEmpty()
    @MinLength(6)
    password:string;
}
export class  SerializedDoctor{

       name:string;
       fname:string;
       sex:boolean;
       doctor_codemelli:string;
       nezam_id:string;
       clinic_id:number;
       isactive:boolean;
       phonenumber:number;
    
        @Exclude()
        password:string;
        constructor (partial:Partial<SerializedDoctor>){
            Object.assign(this,partial);
        }
    
}