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

  test("Construct Paddle with parameters should set X,Y to zero and correct Width and Height properties", () => {
    const paddle = new Paddle(ctx, 33, 11);
    expect([paddle.X, paddle.Y, paddle.Width, paddle.Height]).toStrictEqual([0, 0, 33, 11]);
  });

  test("Paddle startNewGame should set initial position at the bottom center of the canvas", () => {
    const canvasHeight = 600;
    const canvasWidth = 400;
    ctx.canvas.width = canvasWidth;
    ctx.canvas.height = canvasHeight;
    const paddleHeight = 5;
    const paddle = new Paddle(ctx, 15, paddleHeight);
    paddle.startNewGame();
    expect(paddle.X).toBe(Math.floor(canvasWidth / 2));
    expect(paddle.Y).toBe(canvasHeight - (1 + (paddleHeight - 1) / 2));
  });

});