import { Module } from '@nestjs/common';
import { MedicineService } from './medicine.service';
import { MedicineController } from './medicine.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medicine } from 'src/typeorm/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Medicine])],
  providers: [MedicineService],
  controllers: [MedicineController],
  exports:[TypeOrmModule]
})
export class MedicineModule {}
