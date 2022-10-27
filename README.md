# Tauri Plugin reqwest
## 支持请求方式
- get
- post
- put
- patch
- head
- delete

## [请求配置格式](https://docs.rs/reqwest/0.9.11/reqwest/struct.RequestBuilder.html)
- url string
- method #支持请求方式
- basic_auth ("admin", Some("good password")) [#](https://docs.rs/reqwest/0.9.11/reqwest/struct.RequestBuilder.html#method.basic_auth)
- bearer_auth("token")
- body string
- json json
- form json
- headers json

## response
- headers 
- time
- status 
- body
- size