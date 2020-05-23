import Ball from '../js/Ball.js';
import Paddle from '../js/Paddle.js';
import Input from '../js/Input.js';
import PongSounds from '../js/PongSounds.js';

jest.mock('../js/PongSounds.js');

describe('Ball collision sound tests', () => {
  beforeEach(() => {
    window.HTMLMediaElement.prototype.play = () => {};
    PongSounds.mockClear();
  });

  describe('Ball collision sounds', () => {
    it('collision within the paddle should play sound', () => {
      const ctx = document.createElement('canvas').getContext('2d');
      ctx.canvas.width = 800;
      ctx.canvas.height = 600;
      const ball = new Ball(ctx, 5);
      const paddle = new Paddle(ball._ctx, new Input(), 121, 15);
      paddle.resetGame();
      paddle.Y = 100;
      paddle.X = 50;
      ball.YDirection = 1;
      ball.YBottom = paddle.YTop - 1;
      ball.update(paddle);
      expect(PongSounds.mock.instances[0].ballCollidesWithPaddle).toHaveBeenCalledTimes(1);
    });
    it('no collision within the paddle should not play sound', () => {
      const ctx = document.createElement('canvas').getContext('2d');
      ctx.canvas.width = 800;
      ctx.canvas.height = 600;
      const ball = new Ball(ctx, 5);
      const paddle = new Paddle(ball._ctx, new Input(), 121, 15);
      paddle.resetGame();
      paddle.Y = 100;
      paddle.X = 50;
      ball.YDirection = 1;
      ball.Speed = 1;
      ball.YBottom = paddle.YTop - 10;
      ball.update(paddle);
      expect(PongSounds.mock.instances[0].ballCollidesWithPaddle).toHaveBeenCalledTimes(0);
    });
  });
});
