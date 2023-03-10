import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { IUser } from '../../interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { AuthDto } from './dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private UserModel: Model<IUser>,
    private jwt: JwtService,
  ) {}

  async signUp(dto: AuthDto): Promise<{ access_token: string; user: IUser }> {
    const existingUser = await this.UserModel.findOne({
      username: dto.username,
    }).exec();

    if (existingUser) {
      throw new BadRequestException(`User ${dto.username} already found`);
    }

    const newUser = new this.UserModel({
      ...dto,
      role: dto.username === 'alejandro' ? 'admin' : 'user',
    });

    newUser.save();

    return {
      access_token: (await this.signToken(newUser.username)).access_token,
      user: newUser,
    };
  }

  async signIn(dto: AuthDto): Promise<{ access_token: string; user: IUser }> {
    const existingUser = await this.UserModel.findOne({
      username: dto.username,
    }).exec();

    if (existingUser == null) {
      throw new NotFoundException(`User ${dto.username} not found`);
    }

    return {
      access_token: (await this.signToken(existingUser.username)).access_token,
      user: existingUser,
    };
  }

  async signToken(username: string): Promise<{ access_token: string }> {
    const payload = {
      sub: username,
    };

    // TODO: move secret to env
    const secret = 'sueprsecret';

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });

    return {
      access_token: token,
    };
  }
}
