'use strict';

import 'jest-canvas-mock';
import PongGame from './PongGame';
import Paddle from './Paddle';
import Ball from './Ball';

jest.mock('./Paddle');
jest.mock('./Ball');

beforeEach(() => {
  Ball.mockClear();
  Paddle.mockClear();
});

describe("PongGame class", () => {
  const ctx = document.createElement("canvas").getContext('2d');

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
    expect(Paddle).toHaveBeenCalledTimes(1);
    expect(Ball).toHaveBeenCalledTimes(1);
  });

  test('StartGame should create a new Ball and Paddle', () => {
    const canvas = document.createElement("canvas");
    canvas.height = 840;
    canvas.width = 960;
    const g = new PongGame(canvas.getContext('2d'));
    g.startNewGame();
  });
});