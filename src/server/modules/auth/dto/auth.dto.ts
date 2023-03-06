import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class AuthDto {
  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  username: string;

  role: string;
}
