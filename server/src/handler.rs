use axum::{http::StatusCode, response::IntoResponse, Json};
use serde_json::{json, Value};

pub async fn health_check() -> Result<impl IntoResponse, (StatusCode, Json<Value>)> {
    Ok((StatusCode::OK, Json(json!({"status": "healthy"}))))
}
