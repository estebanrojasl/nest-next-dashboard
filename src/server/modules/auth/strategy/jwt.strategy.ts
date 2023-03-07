import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Request } from 'express';

import { User, UserDocument } from '../../user/user.model';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        JwtStrategy.extractJWT,
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      ignoreExpiration: false,
      // TODO: move secret to env
      secretOrKey: 'sueprsecret',
    });
  }

  private static extractJWT(req: Request): string | null {
    if (req.cookies != null && 'accessToken' in req.cookies) {
      console.log(req.cookies['accessToken']);
      return req.cookies['accessToken'];
    }
    return null;
  }

  async validate(payload: { sub: string }) {
    const user = await this.UserModel.findOne({
      username: payload.sub,
    }).exec();

    return user;
  }
}
