import { IsNotEmpty, IsNumberString, MinLength, MaxLength } from "class-validator";

export class CreateNoskheDto{

    @IsNotEmpty()
    name:string;
    @IsNumberString()
    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(10)
    doctor_codemelli:string;
    @IsNumberString()
    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(10)
    patient_codemelli:string;
    @IsNotEmpty()
    medicine_id:number[];
    @IsNotEmpty()
    @MinLength(6)
    doctor_password:string;
}