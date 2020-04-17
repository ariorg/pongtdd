'use strict'
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
    ctx.canvas.width = canvasWidth;
    ctx.canvas.height = canvasHeight;
    const paddle = new Paddle(ctx, 15, paddleHeight);
    paddle.startNewGame();
    expect(paddle.X).toBeGreaterThan(paddle.WidthRadius);
    expect(paddle.X).toBeLessThan(canvasWidth - 1 - paddle.WidthRadius);
    expect(paddle.Y).toBe(canvasHeight - 1 - paddle.HeightRadius - 1);
  });
});