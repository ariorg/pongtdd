'use strict'
import Paddle from "./Paddle";

describe("Paddle", () => {
  test("Paddle creation", () => {
    const paddle = new Paddle();
    expect(paddle).toBeDefined();
  });

  test("Construct Paddle without parameters should set coordinates and size to zero", () => {
    const paddle = new Paddle();
    expect([paddle.X, paddle.Y, paddle.Width, paddle.Height]).toStrictEqual([0, 0, 0, 0]);
  });

  test("Construct Paddle with parameters should set X,Y,Width and Height properties", () => {
    const paddle = new Paddle(123, 234, 34, 12);
    expect([paddle.X, paddle.Y, paddle.Width, paddle.Height]).toStrictEqual([123, 234, 34, 12]);
  });
});