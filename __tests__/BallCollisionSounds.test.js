import Ball from '../js/Ball.js';
import Paddle from '../js/Paddle.js';
import Input from '../js/Input.js';
import PongSounds from '../js/PongSounds.js';

jest.mock('../js/PongSounds.js');

describe('Ball collision sound tests', () => {
  window.HTMLMediaElement.prototype.play = () => {};

  beforeEach(() => {
    PongSounds.mockClear();
  });

  const _input = new Input();
  const _newBall = () => {
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.canvas.width = 800;
    ctx.canvas.height = 600;
    return new Ball(ctx, 5);
  };

  const _newPaddle = ball => {
    const paddle = new Paddle(ball._ctx, _input, 15, 5);
    paddle.resetGame();
    return paddle;
  };

  describe('Ball collision sounds', () => {
    test('Ball collision within the paddle should play sound', () => {
      const ball = _newBall();
      ball.Speed = 1;
      const paddle = new Paddle(ball._ctx, _input, 121, 15);
      paddle.Y = 100;
      paddle.X = 50;
      ball.YDirection = 1;
      ball.YBottom = paddle.YTop - 1;
      ball.update(paddle);
      expect(PongSounds.mock.instances[0].ballCollidesWithPaddle).toHaveBeenCalledTimes(1);
    });
  });
});
