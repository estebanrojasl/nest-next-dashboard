import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ViewModule } from './modules/view/view.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    MongooseModule.forRoot(
      // TODO: move to env
      'mongodb+srv://esteban7590:WTFC9F3tqNevfiWX@cluster0.5qwppq8.mongodb.net/?retryWrites=true&w=majority',
    ),
    ViewModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
