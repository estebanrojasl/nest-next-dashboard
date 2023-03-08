import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../../schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async readAll(payload: string): Promise<User[]> {
    const jsonPayload = JSON.parse(payload);
    return await this.UserModel.find().sort(jsonPayload.sort).exec();
  }
}
