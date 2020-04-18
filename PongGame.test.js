'use strict';

import 'jest-canvas-mock';
import PongGame from './PongGame';
import Paddle from './Paddle';
import Ball from './Ball';

jest.mock('./Ball');

describe("PongGame class", () => {

  beforeEach(() => {
    Ball.mockClear();
  });

  const newPongGame = (width, height) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext('2d')
    ctx.canvas.width = width || 800;
    ctx.canvas.height = height || 600;
    return new PongGame(ctx);
  }

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
    const pg = newPongGame(801, 601)
    expect(pg.CanvasWidth).toBe(801);
    expect(pg.CanvasHeight).toBe(601);
  });

  test("Game should have an initial score of zero", () => {
    const g = newPongGame();
    expect(g.Score).toBe(0);
  });

  test('PongGame constructor should create 1 instance of a Paddle and 1 of a Ball', () => {
    const g = newPongGame();
    expect(g.Paddle).toBeDefined();
    expect(g.Paddle.WidthRadius).toBeGreaterThan(0);
    expect(Ball).toHaveBeenCalledTimes(1);
  });

  test('startGame make Paddle at the bottom of the screen', () => {
    const width = 840;
    const height = 960;
    const g = newPongGame(width, height);
    g.startNewGame();
    expect(g.Paddle.Y).toBe(height - 1 - g.Paddle.HeightRadius - 1);
    expect(g.Paddle.X).toBeGreaterThanOrEqual(g.Paddle.WidthRadius);
    expect(g.Paddle.X).toBeLessThan(width - g.Paddle.WidthRadius - 1);
  });

  // test('startNewGame should place Ball on top of Paddle', () => {
    
  // })

});
