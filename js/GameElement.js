export default class GameElement {
  constructor(ctx, width, height) {
    this._ctx = ctx;
    this.Width = width || 1;
    this.Height = height || 1;
    this.X = 0;
    this.Y = 0;
  }

  get X() {
    return this._x;
  }
  get Y() {
    return this._y;
  }
  get XLeft() {
    return this._x - this.WidthRadius;
  }
  get XRight() {
    return this._x + this.WidthRadius;
  }
  get YTop() {
    return this._y - this.HeightRadius;
  }
  get YBottom() {
    return this._y + this.HeightRadius;
  }
  get Width() {
    return this._width;
  }
  get Height() {
    return this._height;
  }
  get WidthRadius() {
    return (this.Width - 1) / 2;
  }
  get HeightRadius() {
    return (this.Height - 1) / 2;
  }

  set X(value) {
    this._throwIfNotInteger(value, 'GameElement.X');
    this._x = value;
  }
  set Y(value) {
    this._throwIfNotInteger(value, 'GameElement.Y');
    this._y = value;
  }
  set XLeft(value) {
    this._throwIfNotInteger(value, 'GameElement.Y');
    this._x = value + this.WidthRadius;
  }
  set XRight(value) {
    this._throwIfNotInteger(value, 'GameElement.Y');
    this._x = value - this.WidthRadius;
  }
  set YTop(value) {
    this._throwIfNotInteger(value, 'GameElement.Y');
    this._y = value + this.HeightRadius;
  }
  set YBottom(value) {
    this._throwIfNotInteger(value, 'GameElement.Y');
    this._y = value - this.HeightRadius;
  }
  set Width(value) {
    this._throwIfNotOddNumber(value, 'GameElement.Width');
    this._width = value;
  }

  set Height(value) {
    this._throwIfNotOddNumber(value, 'GameElement.Height');
    this._height = value;
  }

  moveTo(x, y) {
    this.X = x;
    this.Y = y;
  }

  resetGame() {
    this.X = 0;
    this.Y = 0;
    this.Width = 1;
    this.Height = 1;
  }

  draw() {
    this._ctx.fillStyle = 'black';
    this._ctx.fillRect(this.XLeft, this.YTop, this.Width, this.Height);
  }

  update() {
    throw 'GameElement update() abstract method should be implemented';
  }

  _throwIfNotInteger(value, valueName) {
    if (!Number.isInteger(value)) throw `${valueName} must be an integer`;
  }

  _throwIfNotOddNumber(value, valueName) {
    this._throwIfNotInteger(value, valueName);
    if (value % 2 === 0) throw `${valueName} must be an odd number`;
  }
}
