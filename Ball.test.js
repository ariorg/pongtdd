'use strict';
import Ball from './Ball';

describe("Ball class tests", () => {
  const ctx = document.createElement("canvas").getContext('2d');

  test("Ball creation", () => {
    const ball = new Ball(ctx);
    expect(ball).toBeDefined();
  });
});
 