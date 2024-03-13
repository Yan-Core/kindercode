use axum::{routing::get, Router};

use crate::handler::health_check;

pub fn create_router() -> Router {
    Router::new().route("/", get(health_check))
}
