import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class PostModel {
  @Field(() => ID)
  id: number;
  @Field()
  message: string;
  @Field(() => Int)
  length: number;
  @Field()
  author: string;
}
