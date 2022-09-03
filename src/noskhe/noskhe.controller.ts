import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateNoskheDto } from './dto/noskhe.dto';
import { NoskheService } from './noskhe.service';

@Controller('noskhe')
export class NoskheController {
    constructor (private readonly noskheService:NoskheService){}
    @Post("create")
    @UsePipes(ValidationPipe)
    async createNosokhe(@Body()body:CreateNoskheDto){
        return this.noskheService.createNoskhe(body);
    }
}
