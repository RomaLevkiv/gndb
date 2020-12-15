import { BaseEntity } from 'typeorm';
export declare class PostEntity extends BaseEntity {
    id: number;
    message: string;
    length: number;
    author: string;
}
