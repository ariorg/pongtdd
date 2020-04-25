import Ball from "./Ball.js";
import Paddle from "./Paddle.js";
import { createCanvas } from "canvas";

describe("Ball class tests", () => {

  describe("constructor", () => {
    test("Ball creation should set Diameter", () => {
      const ctx = document.createElement("canvas").getContext("2d");
      const radius = 3;
      const ball = new Ball(ctx, radius);
      expect(ball).toBeDefined();
      expect(ball.Diameter).toBe(radius * 2 + 1);
    });

    test("Ball creation with no params should have coords 0,0 ", () => {
      const ctx = document.createElement("canvas").getContext("2d");
      const ball = new Ball(ctx);
      expect(ball.X).toBe(0);
      expect(ball.Y).toBe(0);
    });

    test("Ball created with no radius should have Radius=0 and Diameter=1", () => {
      const ctx = document.createElement("canvas").getContext("2d");
      const ball = new Ball(ctx);
      expect(ball.Radius).toBe(0);
      expect(ball.Diameter).toBe(1);
    });

    test("Set Diameter should set Radius and vice versa", () => {
      const ctx = document.createElement("canvas").getContext("2d");
      const ball = new Ball(ctx);
      ball.Diameter = 11;
      expect(ball.Radius).toBe(5);
      ball.Radius = 9;
      expect(ball.Diameter).toBe(9 + 9 + 1);
    });

    test("Diameter cannot be an even number and must be an integer", () => {
      const ctx = document.createElement("canvas").getContext("2d");
      const ball = new Ball(ctx);
      expect(() => {
        ball.Diameter = 10;
      }).toThrow();
      expect(() => {
        ball.Diameter = 9.01;
      }).toThrow();
    });
  });

  describe("startNewGame medthod", () => {
    test("ball max/min random location should match edges of the paddle", () => {
      const ctx = document.createElement("canvas").getContext("2d");
      const ball = new Ball(ctx, 5);
      const paddle = new Paddle(ctx, 15, 5);
      paddle.startNewGame();

      const mockMath = Object.create(global.Math);
      const gMath = global.Math;
      global.Math = mockMath;

      mockMath.random = () => 0.99999999;
      ball.startNewGame(paddle);
      expect(ball.RightX).toBe(paddle.RightX);

      mockMath.random = () => 0.00000001;
      ball.startNewGame(paddle);
      expect(ball.LeftX).toBe(paddle.LeftX);
      global.Math = gMath;
    });

    test("startNewGame should draw a ball on top of the paddle, touching it with at least one pixel", () => {
      const canvas = createCanvas(800, 600);
      const ctx = canvas.getContext("2d");
      const paddle = new Paddle(ctx, 121, 21);
      const ball = new Ball(ctx, 15);

      paddle.startNewGame();
      let numOfPixelsTouchingPaddleBeforeBallDrawn = _numOfPixelsTouchingTopOfPaddle(ctx, paddle);

      ball.startNewGame(paddle);
      let numOfPixelsTouchingPaddleAfterBallDrawn = _numOfPixelsTouchingTopOfPaddle(ctx, paddle);

      expect(numOfPixelsTouchingPaddleBeforeBallDrawn).toBe(0);
      expect(numOfPixelsTouchingPaddleAfterBallDrawn).toBeGreaterThan(1);
      expect(numOfPixelsTouchingPaddleAfterBallDrawn).toBeLessThan(ball.Width);
    });

    function _numOfPixelsTouchingTopOfPaddle(ctx, paddle) {
      return _getNumberofNonTransparentPixels(ctx, paddle.LeftX, paddle.TopY - 1, paddle.Width, 1);
    }

    function _getNumberofNonTransparentPixels(ctx, x, y, width, height) {
      const imageData = ctx.getImageData(x, y, width, height);
      let numberOfNonTransparentPixels = 0;
      let pixelLocation = 0;
      for (let i = 0; i < width * height; i++) {
        let pixel = imageData.data.slice(pixelLocation, pixelLocation + 4);
        if (pixel[3] > 0) numberOfNonTransparentPixels++;
        pixelLocation += 4;
      }
      return numberOfNonTransparentPixels;
    }

  });

  describe("draw method", () => {
    test("should draw itself", () => {
      const ctx = document.createElement("canvas").getContext("2d");
      const ball = new Ball(ctx, 15);
      ball.draw();
      expect(ball._ctx.arc).toHaveBeenCalledTimes(1);
    });
  });

  describe("update method", () => {
    test("Update without collision should change both X and Y if speed=1 and direction=1", () => {
      const ctx = document.createElement("canvas").getContext("2d");
      ctx.canvas.width = 800;
      ctx.canvas.height = 600;
      const ball = new Ball(ctx, 5);

      ball.moveTo(400, 300);
      expect(ball.X).toBe(400);
      expect(ball.Y).toBe(300);

      ball.XDirection = ball.YDirection = ball.Speed = 1;
      ball.update();
      expect(ball.X).toBe(401);
      expect(ball.Y).toBe(301);
    });

    test("ball collision with top/bottom should reverse vertical direction of ball", () => {
      const ctx = document.createElement("canvas").getContext("2d");
      ctx.canvas.width = 800;
      ctx.canvas.height = 600;
      const ball = new Ball(ctx, 5);
      ball.X = 400;
      ball.YDirection = -1;
      ball.Y = ball.Radius;
      ball.update();
      expect(ball.Y).toBe(ball.Radius + ball.Speed);
    });
  });
});
