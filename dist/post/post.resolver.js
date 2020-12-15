"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const post_service_1 = require("./post.service");
const post_model_1 = require("./model/post.model");
const create_post_dto_1 = require("./dto/create-post.dto");
const get_postById_dto_1 = require("./dto/get-postById.dto");
let PostResolver = class PostResolver {
    constructor(postService) {
        this.postService = postService;
    }
    async getAllPosts() {
        return await this.postService.getAllPosts();
    }
    async getPostById(getPostByIdDto) {
        return await this.postService.getPostById(getPostByIdDto);
    }
    async createPost(createPostDto) {
        return await this.postService.createPost(createPostDto);
    }
    async deletePost(getPostByIdDto) {
        return await this.postService.deletePost(getPostByIdDto);
    }
};
__decorate([
    graphql_1.Query(() => [post_model_1.PostModel]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "getAllPosts", null);
__decorate([
    graphql_1.Query(() => post_model_1.PostModel),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_postById_dto_1.GetPostByIdDto]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "getPostById", null);
__decorate([
    graphql_1.Mutation(() => post_model_1.PostModel),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_dto_1.CreatePostDto]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "createPost", null);
__decorate([
    graphql_1.Mutation(() => post_model_1.PostModel),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_postById_dto_1.GetPostByIdDto]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "deletePost", null);
PostResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostResolver);
exports.PostResolver = PostResolver;
//# sourceMappingURL=post.resolver.js.map