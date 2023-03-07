import {
  Controller,
  Get,
  HttpStatus,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

import { UserService } from './user.service';

@Controller('api/users')
export class UserController {
  constructor(private userService: UserService) {}
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getMe(@Req() req: Request) {
    console.log({ user: req.body });
    return 'test';
  }

  @Get()
  async fetchAll(@Res() response) {
    const users = await this.userService.readAll();
    return response.status(HttpStatus.OK).json({
      users,
    });
  }
}
