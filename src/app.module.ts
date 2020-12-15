import { HttpException, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLError } from 'graphql';
import { typeOrmConfig } from './config/typeorm.config';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    PostModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    // глобальный pipe для валидации, иначе надо прописовать валидацию на каждом юните
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      formatError: (err: GraphQLError): any => {
        const error: HttpException = err.originalError as any;
        if (!error.getResponse) {
          console.log('Received 500 error', err);
          return {
            statusCode: 500,
            message: error.message,
            error: error.name,
          };
        }

        return error.getResponse();
      },
    }),
  ],
})
export class AppModule {}
