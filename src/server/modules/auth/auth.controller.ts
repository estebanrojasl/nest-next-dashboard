import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(@Body() dto: AuthDto) {
    return this.authService.signUp(dto);
  }

  @Post('signin')
  async signIn(@Body() dto: AuthDto, @Res() res: any) {
    const { access_token, user } = await this.authService.signIn(dto);
    res.cookie('accessToken', access_token, {
      sameSite: 'strict',
      httpOnly: false,
    });

    return res.send({ user, access_token });
  }
}
