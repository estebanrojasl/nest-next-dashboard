import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { User } from '../user/user.model';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() dto: AuthDto, @Res() res: Response & { user: User }) {
    const { access_token, user } = await this.authService.signUp(dto);

    return res.send({ user, access_token });
  }

  @Post('signin')
  async signIn(@Body() dto: AuthDto, @Res() res: Response & { user: User }) {
    const { access_token, user } = await this.authService.signIn(dto);
    // res.cookie('accessToken', access_token, {
    //   sameSite: 'strict',
    //   httpOnly: false,
    // });

    return res.send({ user, access_token });
  }
}
