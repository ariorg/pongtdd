import MovingGameElement from './MovingGameElement.js';

export default class Paddle extends MovingGameElement {
  constructor(ctx, input, width, height) {
    super(ctx, width || 0, height || 0);
    this._input = input;
  }

  update() {
    this.X -= this._input.IsLeftKeyPressed ? this.Speed : 0;
    this.X += this._input.IsRightKeyPressed ? this.Speed : 0;
    if (this.XLeft < 0) this.XLeft = 0;
    if (this.XRight > this._ctx.canvas.width - 1) this.XRight = this._ctx.canvas.width-1;
  }

  resetGame() {
    this.Y = this._ctx.canvas.height - 1 - this.HeightRadius;
    this.X =
      this.WidthRadius +
      Math.floor(Math.random() * (this._ctx.canvas.width - 2 * this.WidthRadius));
    this.Speed = 4;
    this.draw();
  }
}
