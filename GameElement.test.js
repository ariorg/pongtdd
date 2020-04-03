'use strict'
import GameElement from "./GameElement";

describe("GameElement", () => {
  test("Element creation without parameters hould have x,y coordinates, width and height equal to zero", () => {
    const ball = new GameElement();
    expect(ball.X).toBe(0);
    expect(ball.Y).toBe(0);
    expect(ball.Width).toBe(0);
    expect(ball.Height).toBe(0);
  });
  test("Element creation with constructor parameters should set X,Y,Width and Height properties", () => {
    const ball = new GameElement(100, 200, 30, 10);
    expect([ball.X, ball.Y, ball.Width, ball.Height]).toStrictEqual([100, 200, 30, 10]);
  });
  test("Element creation with x,y parameters only should set Width and Height to zero", () => {
    const ball = new GameElement(100, 200);
    expect([ball.X, ball.Y, ball.Width, ball.Height]).toStrictEqual([100, 200, 0, 0]);
  });
});
