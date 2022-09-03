import { IsNumberString,IsNotEmpty } from "class-validator";

export class CreateClinicDto{

    @IsNotEmpty()
    name:string;
    @IsNotEmpty()
    address:string;
   
}