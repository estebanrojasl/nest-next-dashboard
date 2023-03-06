import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ViewModule } from './modules/view/view.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ViewModule,
    AuthModule,
    UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://esteban7590:WTFC9F3tqNevfiWX@cluster0.5qwppq8.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
