'use strict';

import PongGame from './PongGame';

describe("PongGame class", () => {

  test("Create pong game", () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext('2d');
    let pg = new PongGame(ctx);
    expect(typeof pg != "undefined").toBeTruthy();
  });

  test("New Game has default sized canvas", () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext('2d');
    const pg = new PongGame(ctx);
    expect(pg._ctx.canvas.width).toBeGreaterThan(0);
    expect(pg._ctx.canvas.height).toBeGreaterThan(0);
  });

  test("Width and height of passed in canvas is same in Game object", () => {
    const pg = _newPongGame(801, 601)
    expect(pg.CanvasWidth).toBe(801);
    expect(pg.CanvasHeight).toBe(601);
  });

  test("Game should have an initial score of zero", () => {
    const g = _newPongGame();
    expect(g.Score).toBe(0);
  });

  test('PongGame constructor should create 1 instance of a Paddle and 1 of a Ball', () => {
    const g = _newPongGame();
    expect(g.Paddle).toBeDefined();
    expect(g.Paddle.WidthRadius).toBeGreaterThan(0);
    expect(g.Ball).toBeDefined();
    expect(g.Ball.Radius).toBeGreaterThanOrEqual(0);
  });

  test('startGame make Paddle at the bottom of the screen', () => {
    const width = 840;
    const height = 960;
    const g = _newPongGame(width, height);
    g.startNewGame();
    expect(g.Paddle.Y).toBe(height - 1 - g.Paddle.HeightRadius);
    expect(g.Paddle.X).toBeGreaterThanOrEqual(g.Paddle.WidthRadius);
    expect(g.Paddle.X).toBeLessThan(width - g.Paddle.WidthRadius - 1);
  });

  test('startNewGame should place Ball on random location on top of Paddle', () => {
   const g = _newPongGame();
   g.startNewGame();
   expect(g.Ball.BottomY).toBe(g.Paddle.TopY - 1);
   expect(g.Ball.XLeft).toBeGreaterThanOrEqual(g.Paddle.XLeft);
   expect(g.Ball.XRight).toBeLessThanOrEqual(g.Paddle.XRight);
  });

  const _newPongGame = (width, height) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext('2d')
    ctx.canvas.width = width || 800;
    ctx.canvas.height = height || 600;
    return new PongGame(ctx);
  }
});
