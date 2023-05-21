import init, { GameMap } from "snake_game";

init().then((_) => {
  const CELL_SIZE = 10;
  const map = GameMap.new();
  const canvas = document.getElementById("map");
  const ctx = canvas.getContext("2d");

  canvas.height = map.width() * CELL_SIZE;
  canvas.width = canvas.height;

  function drawMap() {
    ctx.beginPath();

    // colums
    for (let x = 0; x < map.width() + 1; x++) {
      ctx.moveTo(CELL_SIZE * x, 0);
      ctx.lineTo(CELL_SIZE * x, map.width() * CELL_SIZE);
    }

    // rows
    for (let y = 0; y < map.width() + 1; y++) {
      ctx.moveTo(0, CELL_SIZE * y);
      ctx.lineTo(map.width() * CELL_SIZE, CELL_SIZE * y);
    }

    ctx.stroke();
  }

  drawMap();
});
