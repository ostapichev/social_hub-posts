import { forwardRef, Module } from '@nestjs/common';

import { ArticleModule } from '../article/article.module';
import { AuthModule } from '../auth/auth.module';
import { UsersService } from './services/users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [ArticleModule, forwardRef(() => AuthModule)],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
