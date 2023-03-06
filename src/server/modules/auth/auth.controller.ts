import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signUp')
  signUp(@Body() dto: any) {
    return this.authService.signUp(dto);
  }

  @Post('signIn')
  signIn() {
    return this.authService.signIn();
  }
}
