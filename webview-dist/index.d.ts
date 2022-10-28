export declare type ContentType = 'application/json' | 'multipart/form-data' | 'application/x-www-form-urlencoded' | 'text/html' | 'text/plain' | 'application/xml';
export interface Options {
    headers?: [string, string][];
    content_type?: ContentType;
    basic_auth?: [string, string];
    bearer_auth?: string;
    query?: [string, string][];
    timeout?: number;
    body?: string;
    json?: any;
    form?: [string, string][];
}
export declare type Method = 'Get' | 'Post' | 'Put' | 'Patch' | 'Delete' | 'Head';
export interface Response {
    headers: Record<string, string>;
    status: string;
    content_type: ContentType;
    body: string;
    interval: number;
    size: number;
}
export declare function request(url: string, method?: Method, options?: Options): Promise<Response>;
