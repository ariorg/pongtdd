import Ball from "../js/Ball.js";
import Paddle from "../js/Paddle.js";
import Input from "../js/Input.js";
import { createCanvas } from "canvas";
 
describe("Ball class tests", () => {
  window.HTMLMediaElement.prototype.play = () => {};
  const _input = new Input();

  const _newBall = () => {
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.canvas.width = 800;
    ctx.canvas.height = 600;
    return new Ball(ctx, 5);
  }

  const _newPaddle = (ball) => {
    const paddle = new Paddle(ball._ctx, _input, 15, 5);
    paddle.resetGame();
    return paddle;
  }

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
      const ball = _newBall();
      ball.Diameter = 11;
      expect(ball.Radius).toBe(5);
      ball.Radius = 9;
      expect(ball.Diameter).toBe(9 + 9 + 1);
    });

    test("Diameter cannot be an even number and must be an integer", () => {
      const ball = _newBall();
      expect(() => {
        ball.Diameter = 10;
      }).toThrow();
      expect(() => {
        ball.Diameter = 9.01;
      }).toThrow();
    });
  });

  describe("Method resetGame", () => {
    test("ball max/min random location should match edges of the paddle", () => {
      const ball = _newBall();
      const paddle = new Paddle(ball._ctx, _input, 15, 5);
      paddle.resetGame();

      const mockMath = Object.create(global.Math);
      const gMath = global.Math;
      global.Math = mockMath;

      mockMath.random = () => 0.99999999;
      ball.resetGame(paddle);
      expect(ball.XRight).toBe(paddle.XRight);

      mockMath.random = () => 0.00000001;
      ball.resetGame(paddle);
      expect(ball.XLeft).toBe(paddle.XLeft);
      global.Math = gMath;
    });

    test("should draw a ball on top of the paddle, touching it with at least one pixel", () => {
      const canvas = createCanvas(800, 600);
      const ctx = canvas.getContext("2d");
      const paddle = new Paddle(ctx, _input, 121, 21);
      const ball = new Ball(ctx, 15);

      paddle.resetGame();
      let numOfPixelsTouchingPaddleBeforeBallDrawn = _numOfPixelsTouchingTopOfPaddle(ctx, paddle);

      ball.resetGame(paddle);
      let numOfPixelsTouchingPaddleAfterBallDrawn = _numOfPixelsTouchingTopOfPaddle(ctx, paddle);

      expect(numOfPixelsTouchingPaddleBeforeBallDrawn).toBe(0);
      expect(numOfPixelsTouchingPaddleAfterBallDrawn).toBeGreaterThan(1);
      expect(numOfPixelsTouchingPaddleAfterBallDrawn).toBeLessThan(ball.Width);
    });


    test("should set XDirection equally randomly to 1 or -1", () => {
      const ball = _newBall();
      const paddle = new Paddle(ball._ctx, _input, 15, 5);
      paddle.resetGame();

      const mockMath = Object.create(global.Math);
      const globalMath = global.Math;
      global.Math = mockMath;

      mockMath.random = () => 0.49999999;
      ball.resetGame(paddle);
      expect(ball.XDirection).toBe(-1);

      mockMath.random = () => 0.50000000;
      ball.resetGame(paddle);
      expect(ball.XDirection).toBe(1);
      global.Math = globalMath;

    });

    const _numOfPixelsTouchingTopOfPaddle = (ctx, paddle) => {
      return _getNumberofNonTransparentPixels(ctx, paddle.XLeft, paddle.YTop - 1, paddle.Width, 1);
    }

    const _getNumberofNonTransparentPixels = (ctx, x, y, width, height) => {
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

  describe("Draw method", () => {
    test("should draw itself", () => {
      const ball = _newBall();
      ball.draw();
      expect(ball._ctx.arc).toHaveBeenCalledTimes(1);
    });
  });

  describe("Method update", () => {

    describe('Collision with canvas border', () => {

      test("If no collision it should add (speed * direction) to X and Y", () => {
        const ball = _newBall();

        ball.moveTo(400, 300);
        expect(ball.Y).toBe(300);

        ball.XDirection = ball.YDirection = ball.Speed = 1;
        ball.update(_newPaddle(ball));
        expect(ball.X).toBe(401);
        expect(ball.Y).toBe(301);

        ball.Speed = 2;
        ball.update(_newPaddle(ball));
        expect(ball.X).toBe(403);
        expect(ball.Y).toBe(303);
      });

      test("Ball collision with top of screen should set YDirection to 1", () => {
        const ball = _newBall();
        ball.X = 400;
        ball.Speed = 2;
        ball.YDirection = -1;
        let yBeforeUpdate = ball.Y = ball.Radius;
        ball.update(_newPaddle(ball));
        expect(ball.YDirection).toBe(1);
        expect(ball.Y).toBe(yBeforeUpdate + ball.YDirection * ball.Speed);
      });

      test("Ball collision with bottom of screen should set YDirection to -1", () => {
        const ball = _newBall();
        ball.X = 400;
        ball.Speed = 3;
        ball.YDirection = 1;
        let yBeforeUpdate = ball.Y = ball._ctx.canvas.height - ball.Radius;
        ball.update(_newPaddle(ball));
        expect(ball.YDirection).toBe(-1);
        expect(ball.Speed).toBe(3);
        expect(ball.Y).toBe(yBeforeUpdate + ball.YDirection * ball.Speed);
      });

      test("Ball collision with left edge should reverse XDirection of ball", () => {
        const ball = _newBall();
        ball.Y = 300;
        ball.Speed = 2;
        ball.XDirection = -1;
        let xBeforeUpdate = ball.X = ball.Radius;
        ball.update(_newPaddle(ball));
        expect(ball.XDirection).toBe(1);
        expect(ball.Speed).toBe(2);
        expect(ball.X).toBe(xBeforeUpdate + ball.XDirection * ball.Speed);
      });

      test("ball collision with right edge should reverse XDirection of ball", () => {
        const ball = _newBall();
        ball.Y = 300;
        ball.Speed = 2;
        ball.XDirection = 1;
        let xBeforeUpdate = ball.X = ball._ctx.canvas.width - ball.Radius;
        ball.update(_newPaddle(ball));
        expect(ball.XDirection).toBe(-1);
        expect(ball.Speed).toBe(2);
        expect(ball.X).toBe(xBeforeUpdate + ball.XDirection * ball.Speed);
      });
    });

    describe('Collision detection with paddle', () => {
      const ball = _newBall();
      ball.Speed = 2;
      const paddle = new Paddle(ball._ctx, _input, 121, 15)
      paddle.Y = 100;
      paddle.X = 50;

      test("Ball collision within the paddle should set YDirection to -1", () => {
        ball.YDirection = 1;
        ball.YBottom = paddle.YTop - 1;
        ball.update(paddle);
        expect(ball.YDirection).toBe(-1);
      });

      test("Ball just to the right of the paddle should not cause collision and change YDirection", () => {
        ball.YBottom = paddle.YTop - 1;
        ball.YDirection = 1;
        ball.XLeft = paddle.XRight + 1;
        ball.update(paddle);
        expect(ball.YDirection).toBe(1);
      });

      test("Ball just to the left of the paddle should not cause collision and change YDirection", () => {
        ball.YBottom = paddle.YTop - 1;
        ball.YDirection = 1;
        ball.XRight = paddle.XLeft - 1;
        ball.update(paddle);
        expect(ball.YDirection).toBe(1);
      });

      test("Ball colliding just inside the left corner of the Paddle should not change X direction", () => {
        ball.YBottom = paddle.YTop - 1;
        ball.YDirection = 1;
        ball.XDirection = 1;
        ball.XRight = paddle.XLeft + ball.Radius + 1;
        ball.update(paddle);
        expect(ball.XDirection).toBe(1);
        expect(ball.YDirection).toBe(-1);
      });

      test("Ball colliding with the left corner of the Paddle should reverse ball direction", () => {
        ball.YBottom = paddle.YTop - 1;
        ball.YDirection = 1;
        ball.XDirection = 1;
        ball.XRight = paddle.XLeft + ball.Radius;
        ball.update(paddle);
        expect(ball.XDirection).toBe(-1);
        expect(ball.YDirection).toBe(-1);
      });
      
      test("Ball colliding with the right corner of the Paddle should reverse ball direction", () => {
        ball.YBottom = paddle.YTop - 1;
        ball.YDirection = 1;
        ball.XDirection = -1;
        ball.XLeft = paddle.XRight - ball.Radius;
        ball.update(paddle);
        expect(ball.XDirection).toBe(1);
        expect(ball.YDirection).toBe(-1);
      });
    });
  });
});
