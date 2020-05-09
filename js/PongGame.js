import Input from './Input.js';
import Ball from './Ball.js';
import Paddle from './Paddle.js';

export default class PongGame {
  constructor(ctx) {
    this._ctx = ctx;
    this._score = 0;
    this._paddle = new Paddle(this._ctx, 121, 15);
    this._ball = new Ball(this._ctx, 11);
    this._input = new Input();
    this.reset();
  }

  get CanvasWidth() { return this._ctx.canvas.width; }
  get CanvasHeight() { return this._ctx.canvas.height; }
  get Score() { return this._score; }
  get Paddle() { return this._paddle; }
  get Ball() { return this._ball; }

  reset() {
    this.Paddle.resetGame();
    this.Ball.resetGame(this.Paddle);
  }

  run = () => {
    this.Paddle.update(this._input);
    this.Ball.update(this.Paddle);

    this._clearCanvas(this._ctx);
    this.Ball.draw();
    this.Paddle.draw();
    requestAnimationFrame(this.run);
  };

  _clearCanvas(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }
}
