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

  function _newBallInMiddleOfCanvas() {
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.canvas.width = 800;
    ctx.canvas.height = 600;
    const ball = new Ball(ctx, 5);
    ball.X = Math.floor(ctx.canvas.width / 2);
    ball.Y = Math.floor(ctx.canvas.height / 2);
    ball.Speed = 1;
    ball.YDirection = 1;
    return ball;
  }

  function _newPaddleBelowBall(ball) {
    const paddle = new Paddle(ball._ctx, new Input(), 121, 15);
    paddle.resetGame();
    paddle.X = ball.X;
    return paddle;
  }

  it('collision with the paddle should play sound', () => {
    const ball = _newBallInMiddleOfCanvas();
    const paddle = _newPaddleBelowBall(ball);
    ball.YBottom = paddle.YTop - 1;
    ball.update(paddle);
    expect(PongSounds.mock.instances[0].ballCollidesWithPaddle).toHaveBeenCalledTimes(1);
  });

  it('not colliding with paddle should not play sound', () => {
    const ball = _newBallInMiddleOfCanvas();
    const paddle = _newPaddleBelowBall(ball);
    ball.YBottom = paddle.YTop - 10;
    ball.update(paddle);
    ball.XLeft = paddle.XRight + 10;
    ball.YBottom = paddle.YTop - 1;
    ball.update(paddle);
    expect(PongSounds.mock.instances[0].ballCollidesWithPaddle).toHaveBeenCalledTimes(0);
  });

  it('should play sound when ball collides with top border', () => {
    const ball = _newBallInMiddleOfCanvas();
    ball.X = 400;
    ball.Speed = 1;
    ball.YDirection = -1;
    ball.Y = ball.Radius;
    ball.update(_newPaddleBelowBall(ball));
    expect(ball.YDirection).toBe(1);
    expect(PongSounds.mock.instances[0].ballCollidesWithBorder).toHaveBeenCalledTimes(1);
  });

  it('should play sound when ball collides with left side borders', () => {
    const ball = _newBallInMiddleOfCanvas();
    ball.Speed = 1;
    ball.XDirection = -1;
    ball.X = ball.Radius;
    ball.update(_newPaddleBelowBall(ball));
    expect(PongSounds.mock.instances[0].ballCollidesWithBorder).toHaveBeenCalledTimes(1);
  });
  
  it('should play sound when ball collides with right side borders', () => {
    const ball = _newBallInMiddleOfCanvas();
    ball.Speed = 1;
    ball.XDirection = 1;
    ball.X = ball._ctx.canvas.width - ball.Radius;
    ball.update(_newPaddleBelowBall(ball));
    expect(PongSounds.mock.instances[0].ballCollidesWithBorder).toHaveBeenCalledTimes(1);
  });
});
