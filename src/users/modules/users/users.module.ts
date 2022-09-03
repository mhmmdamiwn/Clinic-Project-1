import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clinic, Doctor, Medicine, Noskhe, Patient, User } from 'src/typeorm/typeorm';
import { UsersController } from 'src/users/controllers/users/users.controller';
import { UsersService } from 'src/users/services/users/users.service';

@Module({
    imports:[TypeOrmModule.forFeature([User,Clinic,Doctor,Patient,Medicine,Noskhe])],
    controllers:[UsersController],
    providers:[UsersService],
    exports:[TypeOrmModule]
})
export class UsersModule {
    
}
