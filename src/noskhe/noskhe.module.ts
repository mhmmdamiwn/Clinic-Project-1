import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor, Medicine, Noskhe, Patient } from 'src/typeorm/typeorm';
import { NoskheController } from './noskhe.controller';
import { NoskheService } from './noskhe.service';

@Module({
  imports:[TypeOrmModule.forFeature([Noskhe,Doctor,Medicine,Patient])],
  controllers: [NoskheController],
  providers: [NoskheService],
  exports:[TypeOrmModule]
})
export class NoskheModule {}
