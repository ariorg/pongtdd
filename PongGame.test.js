'use strict';

import 'jest-canvas-mock';
import PongGame from './PongGame';
import Paddle from './Paddle';
import Ball from './Ball';

jest.mock('./Ball');

describe("PongGame class", () => {

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext('2d');

  beforeEach(() => {
    canvas.width = 800;
    canvas.height = 600;
    Ball.mockClear();
  });

  test("Create pong game", () => {
    let pg = new PongGame(ctx);
    expect(typeof pg != "undefined").toBeTruthy();
  });

  test("New Game has default sized canvas", () => {
    const pg = new PongGame(ctx);
    expect(pg._ctx.canvas.width).toBeGreaterThan(0);
    expect(pg._ctx.canvas.height).toBeGreaterThan(0);
  });

  test("Width and height of passed in canvas is same in Game object", () => {
    const canvas = document.createElement("canvas");
    canvas.width = 801;
    canvas.height = 601;
    const pg = new PongGame(canvas.getContext('2d'));
    expect(pg.CanvasWidth).toBe(801);
    expect(pg.CanvasHeight).toBe(601);
  });

  test("Game should have an initial score of zero", () => {
    const g = new PongGame(ctx);
    expect(g.Score).toBe(0);
  });

  test('PongGame constructor should create 1 instance of a Paddle and 1 of a Ball', () => {
    const g = new PongGame(ctx);
    expect(g.Paddle).toBeDefined();
    expect(Ball).toHaveBeenCalledTimes(1);
  });

  test('startGame make Paddle at the bottom of the screen in a random location', () => {
    ctx.canvas.height = 840;
    ctx.canvas.width = 960;
    const g = new PongGame(ctx);
    g.startNewGame();
    expect(g.Paddle.Y).toBeDefined();
    expect(g.Paddle.Y).toBe(ctx.canvas.height - g.Paddle.HeightRadius - 1);
    expect(g.Paddle.X).toBeDefined();
    expect(g.Paddle.X > g.Paddle.WidthRadius && g.Paddle.X < ctx.canvas.width - g.Paddle.WidthRadius).toBeTruthy;
  });
});