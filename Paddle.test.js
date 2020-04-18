'use strict'
import 'jest-canvas-mock';
import Paddle from "./Paddle";

describe("Paddle class tests", () => {
  const ctx = document.createElement("canvas").getContext('2d');

  test("Paddle creation", () => {
    const paddle = new Paddle();
    expect(paddle).toBeDefined();
  });

  test("Construct Paddle without parameters should set coordinates and size to zero", () => {
    const paddle = new Paddle(ctx);
    expect([paddle.X, paddle.Y, paddle.Width, paddle.Height]).toStrictEqual([0, 0, 1, 1]);
  });

  test("Construct Paddle with parameters should set X,Y to zero and correct Width, Height and Radius properties", () => {
    const paddle = new Paddle(ctx, 33, 11);
    expect([paddle.X, paddle.Y, paddle.Width, paddle.Height, paddle.WidthRadius, paddle.HeightRadius]).toStrictEqual([0, 0, 33, 11, 16, 5]);
  });

  test("Paddle startNewGame should set initial position at the bottom of the canvas at random x-position", () => {
    const canvasHeight = 600;
    const canvasWidth = 400;
    const paddleHeight = 5;
    const paddle = _newPaddle(canvasWidth, canvasHeight, 15, paddleHeight);
    paddle.startNewGame();
    expect(paddle.X).toBeGreaterThan(paddle.WidthRadius);
    expect(paddle.X).toBeLessThan(canvasWidth - 1 - paddle.WidthRadius);
    expect(paddle.Y).toBe(canvasHeight - 1 - paddle.HeightRadius);
  });

  test("should draw itself", () => {
    const pdl = _newPaddle();
    pdl.draw();
    expect(pdl._ctx.fillRect).toHaveBeenCalledTimes(1);
  });

  function _newPaddle(canvasWidth, canvasHeight, paddleWidth, paddleHeight) {
    const ctx = document.createElement("canvas").getContext('2d');
    ctx.canvas.width = canvasWidth || 800;
    ctx.canvas.height = canvasHeight || 600;
    const paddle = new Paddle(ctx, paddleWidth || 25, paddleHeight || 9);
    return paddle;
  }
});

