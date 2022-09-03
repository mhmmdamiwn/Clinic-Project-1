import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clinic, Doctor } from 'src/typeorm/typeorm';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';

@Module({
  imports:[TypeOrmModule.forFeature([Doctor,Clinic])],
  controllers: [DoctorsController],
  providers: [DoctorsService],
  exports:[TypeOrmModule]
})
export class DoctorsModule {}
