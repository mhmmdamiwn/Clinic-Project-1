import { IsNotEmpty, IsNumberString } from "class-validator";

export class CreateMedicineDto{
    @IsNotEmpty()
    name:string;
}