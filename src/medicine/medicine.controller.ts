import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateMedicineDto } from './dto/medicine.dto';
import { MedicineService } from './medicine.service';

@Controller('medicine')
export class MedicineController {
    constructor (private readonly medicineService:MedicineService){}
    @Post("create")
    @UsePipes(ValidationPipe)
    async createMedicine(@Body()body:CreateMedicineDto){
        return this.medicineService.createMedicine(body);
    }
    
}
