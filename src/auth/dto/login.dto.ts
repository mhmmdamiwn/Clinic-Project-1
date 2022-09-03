import { IsNotEmpty, IsNumberString, MaxLength, MinLength } from "class-validator";

export class LoginUserDto{
    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(10)
    @IsNumberString()
    username:string
    @IsNotEmpty()
    @MinLength(6)
    password:string
}