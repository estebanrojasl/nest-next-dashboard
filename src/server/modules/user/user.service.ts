import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../../schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async readAll(payload: string): Promise<{ users: User[]; count: number }> {
    const jsonPayload = JSON.parse(payload);
    return {
      users: await this.UserModel.find()
        .limit(jsonPayload.limit)
        .sort(jsonPayload.sort)
        .exec(),
      count: await this.UserModel.countDocuments().exec(),
    };
  }
}
