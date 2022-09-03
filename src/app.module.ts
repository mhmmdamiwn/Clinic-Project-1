import { Module,forwardRef } from '@nestjs/common';
import { UsersService } from './users/services/users/users.service';
import { UsersController } from './users/controllers/users/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClinicController } from './clinic/clinic.controller';
import { PatientController } from './patient/patient.controller';
import { NoskheController } from './noskhe/noskhe.controller';
import { MedicineController } from './medicine/medicine.controller';
import { DoctorsController } from './doctors/doctors.controller';
import { ClinicService } from './clinic/clinic.service';
import { PatientService } from './patient/patient.service';
import { NoskheService } from './noskhe/noskhe.service';
import { MedicineService } from './medicine/medicine.service';
import { DoctorsService } from './doctors/doctors.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './auth/util/strategy.auth';
import { JwtModule } from '@nestjs/jwt';
import { jwtStrategy } from './auth/jwt/jwtStrategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import entities from 'src/typeorm';
import { AuthModule } from './auth/auth.module';
import { ClinicModule } from './clinic/clinic.module';
import { PatientModule } from './patient/patient.module';
import { NoskheModule } from './noskhe/noskhe.module';
import { MedicineModule } from './medicine/medicine.module';
import { DoctorsModule } from './doctors/doctors.module';
import { UsersModule } from './users/modules/users/users.module';
import { Patient, Doctor, Clinic, Noskhe, Medicine, User } from './typeorm/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:"root",
    password:"password",
    database:"clinic2_db",
    synchronize:true,
    entities:entities,
  }), AuthModule, ClinicModule,
  PatientModule, NoskheModule,MedicineModule, DoctorsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private configService: ConfigService) {}
}
