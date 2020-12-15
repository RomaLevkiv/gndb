import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsInt, Max, Min } from 'class-validator';

@ArgsType()
export class GetPostByIdDto {
  @Field()
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  id: number;
}
