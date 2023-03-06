import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ViewModule } from './modules/view/view.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    ViewModule,
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://esteban7590:WTFC9F3tqNevfiWX@cluster0.5qwppq8.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: 'Student', schema: UserSchema }]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
