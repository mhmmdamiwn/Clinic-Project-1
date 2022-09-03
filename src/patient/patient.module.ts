import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from 'src/typeorm/typeorm';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';

@Module({
  imports:[TypeOrmModule.forFeature([Patient])],
  controllers: [PatientController],
  providers: [PatientService],
  exports:[TypeOrmModule]
})
export class PatientModule {}
