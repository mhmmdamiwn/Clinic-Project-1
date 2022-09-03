import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/typeorm';
import { Repository } from 'typeorm';
import { comparePassword, encodePassword } from './bcrypt/bcryptPass';
import { LoginUserDto } from './dto/login.dto';

@Injectable()
export class AuthService 
{
   constructor( @InjectRepository(User) private userRepo:Repository<User>,private jwtService:JwtService,){}
    async validateUser(username:string,password:string){
      const user=await this.userRepo.findOne({
        where:{
            username:username
        }
      });
      if(user){
        const matched =comparePassword(password,user.password);
        if(matched)
        return user;
      else{
        throw new HttpException("wrong password",HttpStatus.BAD_REQUEST);
      }}
      }
      async createUser(body:LoginUserDto){
        const foundUser=await this.userRepo.findOne({
          where:{
            username:body.username,
          }
        })
        if(!foundUser){
          const createuser= this.userRepo.create();
          createuser.password= encodePassword(body.password);
          createuser.username=body.username;
           return this.userRepo.save(createuser);
           
        }
        else{
          throw new HttpException("username exist",HttpStatus.BAD_REQUEST);
        }
      }
      async createAccessToken(user:any){
        const payload={username:user.username , password:user.password}

        return {
          accessToken:this.jwtService.sign(payload)
        };
      }
    }

