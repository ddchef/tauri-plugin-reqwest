use tauri::{
    command,
    plugin::{Builder, TauriPlugin},
    AppHandle, Runtime, Window,
};

mod http;
use http::{HttpClientBuilder, Method, RequestOptions, Result, RichResponse};

#[command]
async fn request<R: Runtime>(
    _app: AppHandle<R>,
    _window: Window<R>,
    url: String,
    method: Method,
    options: RequestOptions,
) -> Result<RichResponse> {
    let client = HttpClientBuilder::new().build()?.build(url, method);
    let req = client.inject(options);
    let res = req.send().await?;
    let info = res.response_info().await?;
    Ok(info)
}

/// Initializes the plugin.
pub fn init<R: Runtime>() -> TauriPlugin<R> {
    Builder::new("reqwest")
        .invoke_handler(tauri::generate_handler![request])
        .setup(|_app| Ok(()))
        .build()
}
