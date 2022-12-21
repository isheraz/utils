import { BlogStatus, ContentTypes } from "../enum/";
export type BlogType = {
    title: string;
    subTitle: string;
    excerpt: string;
    header_image: string;
    content: Array<any>;
    tags: Array<string>;
    status: BlogStatus;
    reviewed: boolean;
    published_date: Date;
    created_on: Date;
    updated_on: Date;
};
export type ContentType = {
    type: ContentTypes;
    value: string;
};
