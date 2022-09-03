
import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}
    @Get("patient/:id")
   async findPatientById(@Param('id')id:string):Promise<any>{
        return this.userService.findPatientById(id);
    
    }
    @Get("patient/")
    async findPatients():Promise<any>{
         return this.userService.findPatients();
     
     }
    @Get("doctor/:id")
    async findDoctorById(@Param('id')id:string):Promise<any>{
         return this.userService.findDoctorById(id);
     
     }
     @Get("doctor/")
     async findDoctors():Promise<any>{
          return this.userService.findDoctors();
      
      }
      @Get("doctor/:id/noskhe")
    async findAllNoskheByDoctorId(@Param('id')id:string):Promise<any>{
         return this.userService.findAllNoskheByDoctorId(id);
     
     }
}
