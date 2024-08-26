import { Global, Module } from '@nestjs/common';

import { ArticleRepository } from './services/article.repository';
import { CommentRepository } from './services/comment.repository';
import { FollowRepository } from './services/follow.repository';
import { TagRepository } from './services/tag.repository';
import { UserRepository } from './services/user.repository';

const repositories = [
  ArticleRepository,
  CommentRepository,
  UserRepository,
  FollowRepository,
  TagRepository,
];

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: repositories,
  exports: repositories,
})
export class RepositoryModule {}
