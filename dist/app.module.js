"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("./config/typeorm.config");
const post_module_1 = require("./post/post.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            post_module_1.PostModule,
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeOrmConfig),
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: 'schema.gql',
                formatError: (err) => {
                    const error = err.originalError;
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
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map