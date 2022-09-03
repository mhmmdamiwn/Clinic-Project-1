import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import {Strategy,ExtractJwt}from "passport-jwt"
import { Repository } from "typeorm";
import { ConfigService } from '@nestjs/config';
import { User } from "src/typeorm/typeorm";
@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy){
    
    constructor(@InjectRepository(User)private readonly userRepo:Repository<User>,configService:ConfigService
    ){
        super({

            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('JWT_SECRET'),
          });
    }
    async validate(payload:any){
        const user =await this.userRepo.findOne({
            where:{
                username:payload.username
            }
        })
        return {
            username:user.username,
            password:user.password
        };
    }
}