use wasm_bindgen::prelude::*;

extern crate wee_alloc;

// Use `wee_alloc` as the global allocator.
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub struct GameMap {
    pub width: usize,
}

#[wasm_bindgen]
impl GameMap {
    pub fn new() -> Self {
        Self { width: 16 }
    }

    pub fn width(&self) -> usize {
        self.width
    }
}
