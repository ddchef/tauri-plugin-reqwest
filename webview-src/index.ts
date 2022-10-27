import { invoke } from '@tauri-apps/api/tauri'

export type ContentType ='application/json'|'multipart/form-data'|'application/x-www-form-urlencoded'|'text/html'|'text/plain'|'application/xml'

export interface Options{
  headers?:Record<string,string>[],
  content_type?:ContentType,
  basic_auth?:[string,string],
  bearer_auth?:string,
  query?:Record<string,string>[],
  timeout?: number,
  body?: string,
  json?:any,
  form?:Record<string,string>[]
}

export type Method ='Get'|'Post'|'Put'|'Patch'|'Delete'|'Head';

export interface Response{
  headers:Record<string,string>,
  status:string,
  content_type: ContentType,
  body:string,
  interval:number,
  size:number
}

export async function request(url:string,method?:Method,options?:Options):Promise<Response> {
  return await invoke('plugin:reqwest|request',{
    url,
    method:method||'Get',
    options:options||{}
  })
}
