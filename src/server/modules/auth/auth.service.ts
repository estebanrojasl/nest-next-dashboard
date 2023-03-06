import { Injectable } from '@nestjs/common';
import { IUser } from '../../interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}

  async signUp(dto: AuthDto): Promise<IUser> {
    const newStudent = await new this.userModel(dto);
    return newStudent.save();
  }

  async signIn() {
    return { msg: 'signed in' };
  }
}
