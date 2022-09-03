import { Body, Controller, Get, Post, Request, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login.dto';
import { jwtGuard } from './jwt/jwtGuard';
import { LocalAuthGuard } from './util/local-authguard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService,){}
    @Post("login")
    @UseGuards(LocalAuthGuard)
    @UsePipes(ValidationPipe)
    loginUser(@Request()req):any{
       return this.authService.createAccessToken(req.user);
    }
    @Post("signup")
    @UsePipes(ValidationPipe)
    signupUser(@Body() body:LoginUserDto){
       return this.authService.createUser(body);
    }

    @Get("protected")
    @UseGuards(jwtGuard)
    protected(@Request()req):string{
      return req.user;
    }
}
