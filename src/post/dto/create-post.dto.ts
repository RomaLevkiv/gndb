import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsInt, Max } from 'class-validator';

@ArgsType()
export class CreatePostDto {
  @Field()
  @IsNotEmpty()
  message: string;

  @Field(() => Int)
  @IsInt()
  @Max(32)
  length: number;

  @Field()
  @IsNotEmpty()
  author: string;
}
