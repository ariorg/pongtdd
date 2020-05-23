import Paddle from '../js/Paddle.js';
import Input from '../js/Input.js';

describe('Paddle class tests', () => {
  window.HTMLMediaElement.prototype.play = () => {};
  describe('Constructor', () => {
    test('Paddle creation', () => {
      const paddle = new Paddle();
      expect(paddle).toBeDefined();
    });

    test('Construct without params should set coordinates and size to 0', () => {
      const ctx = document.createElement('canvas').getContext('2d');
      const paddle = new Paddle(ctx);
      expect([paddle.X, paddle.Y, paddle.Width, paddle.Height]).toStrictEqual([0, 0, 1, 1]);
    });

    test('Construct with params should set X,Y to 0 and correct Width, Height and Radius', () => {
      const input = new Input();
      const ctx = document.createElement('canvas').getContext('2d');
      const paddle = new Paddle(ctx, input, 33, 11);
      expect([
        paddle.X,
        paddle.Y,
        paddle.Width,
        paddle.Height,
        paddle.WidthRadius,
        paddle.HeightRadius,
      ]).toStrictEqual([0, 0, 33, 11, 16, 5]);
    });
  });

  describe('Method draw', () => {
    test('Should draw itself', () => {
      const pdl = _newPaddle();
      pdl.draw();
      expect(pdl._ctx.fillRect).toHaveBeenCalledTimes(1);
    });
  });

  describe('Method resetGame ', () => {
    test('Should set initial position at the bottom of the canvas at random x-position', () => {
      const canvasHeight = 600;
      const canvasWidth = 400;
      const paddleHeight = 5;
      const paddle = _newPaddle(canvasWidth, canvasHeight, 15, paddleHeight);
      paddle.resetGame();
      expect(paddle.X).toBeGreaterThanOrEqual(paddle.WidthRadius);
      expect(paddle.X).toBeLessThan(canvasWidth - 1 - paddle.WidthRadius);
      expect(paddle.Y).toBe(canvasHeight - 1 - paddle.HeightRadius);
    });

    test('Max random draw-location for paddle should be at the right edge of the canvas', () => {
      const canvasWidth = 600;
      const paddleWidth = 15;
      const pdl = _newPaddle(canvasWidth, 400, 15, 5);
      const mockMath = Object.create(global.Math);
      mockMath.random = () => 0.99999999;
      global.Math = mockMath;
      pdl.resetGame();
      expect(pdl.XRight).toBe(canvasWidth - 1);
      expect(pdl.X).toBe(canvasWidth - 1 - (paddleWidth - 1) / 2);
    });

    test('Min random draw-location for paddle should be at x=0', () => {
      const canvasWidth = 600;
      const paddleWidth = 15;
      const pdl = _newPaddle(canvasWidth, 400, paddleWidth, 5);
      const mockMath = Object.create(global.Math);
      mockMath.random = () => 0.00000001;
      global.Math = mockMath;
      pdl.resetGame();
      expect(pdl.XLeft).toBe(0);
      expect(pdl.X).toBe((paddleWidth - 1) / 2);
    });
  });

  describe('Method update', () => {
    test('Paddle.update with no key pressed should not move', () => {
      const p = _newPaddle();
      const orgX = 200;
      p.Speed = 2;
      p.X = orgX;
      p.update();
      expect(p.X).toBe(orgX);
    });

    test('should move left one speed if leftkey is pressed', () => {
      const p = _newPaddle();
      const orgX = 100;
      p.Speed = 2;
      p.X = orgX;
      document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 37 }));
      p.update();
      expect(p.X).toBe(orgX - p.Speed);
    });

    test('should move right one speed if rightkey is pressed', () => {
      const p = _newPaddle();
      const orgX = 200;
      p.Speed = 2;
      p.X = orgX;
      document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 39 }));
      p.update();
      expect(p.X).toBe(orgX + p.Speed);
    });

    test('should not move beyond left canvas edge', () => {
      const p = _newPaddle();
      p.XLeft = 1;
      p.Speed = 3;
      document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 37 }));
      p.update();
      expect(p.XLeft).toBe(0);
    });

    test('should not move beyond right side of canvas', () => {
      const canvasWidth = 500;
      const p = _newPaddle(canvasWidth, 300);
      p.XRight = canvasWidth - 2;
      p.Speed = 4;
      document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 39 }));
      p.update();
      expect(p.XRight).toBe(canvasWidth - 1);
    });
  });

  function _newPaddle(canvasWidth, canvasHeight, paddleWidth, paddleHeight) {
    const input = new Input();
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.canvas.width = canvasWidth || 800;
    ctx.canvas.height = canvasHeight || 600;
    const paddle = new Paddle(ctx, input, paddleWidth || 25, paddleHeight || 9);
    return paddle;
  }
});
