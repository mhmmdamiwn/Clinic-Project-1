import { MinLength, MaxLength } from "class-validator";

export class FindUserDto{
    @MinLength(10)
    @MaxLength(10)
    codemelli:string;
    
}



