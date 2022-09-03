import { Module } from '@nestjs/common';
import { JwtModule, JwtSecretRequestType, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/modules/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtStrategy } from './jwt/jwtStrategy';
import { LocalStrategy } from './util/strategy.auth';
import {ConfigModule,ConfigService} from "@nestjs/config"
import { jwtConstants } from './jwtconstant';
import { Type } from 'class-transformer';
import { User } from 'src/typeorm/typeorm';
@Module(
  {
  imports:[ConfigModule.forRoot({
    isGlobal: true,
    cache: true,
  }),PassportModule,TypeOrmModule.forFeature([User]) ,JwtModule.registerAsync({
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      secret: configService.get<string>('JWT_SECRET'),
      signOptions: {
        expiresIn: `${configService.get('JWT_EXPIRATION_TIME')}s`,
      }}),
  }),ConfigModule ],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy,jwtStrategy]
})
export class AuthModule {
}
