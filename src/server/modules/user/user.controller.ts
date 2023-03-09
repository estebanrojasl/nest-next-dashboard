import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response, Request } from 'express';

import { UserService } from './user.service';
import { IUser } from '../../interfaces/user.interface';
import { Roles } from '../auth/role.decorator';
import { RoleGuard } from '../auth/role.guard';

@UseGuards(AuthGuard('jwt'))
@Controller('api/users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  getMe(@Req() req: Request & { user: IUser }) {
    return req.user;
  }

  @Roles('admin')
  @UseGuards(RoleGuard)
  @Post()
  async fetchAll(@Body() body: { payload: string }, @Res() response: Response) {
    const { users, count } = await this.userService.readAll(body.payload);
    return response.status(HttpStatus.OK).json({
      users,
      count,
    });
  }
}
