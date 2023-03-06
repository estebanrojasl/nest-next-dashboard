import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async signUp() {
    return { msg: 'signed up' };
  }

  async signIn() {
    return { msg: 'signed in' };
  }
}
