import { IsNotEmpty, MinLength, MaxLength, IsBoolean } from "class-validator";

export class CreatePatientDto{

    @IsNotEmpty()
    name:string;
    @IsNotEmpty()
    fname:string;
    @MinLength(10)
    @MaxLength(10)
    @IsNotEmpty()
    patient_codemelli:string;
    @IsNotEmpty()
    @IsBoolean()
    sex:boolean;
    @MinLength(10)
    @MaxLength(10)
    @IsNotEmpty()
    phonenumber:number;

}
