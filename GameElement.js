'use strict'

export default class GameElement {
    constructor(canvasWidth, canvasHeight, x, y, width, height) {
        // if (arguments.length < 2) 
        //     throw "Canvas width and size must be supplied"
        this._canvasWidth = canvasWidth;
        this._canvasHeight = canvasHeight;
        this.X = x || 0;
        this.Y = y || 0;
        this.Width = width || 1;
        this.Height = height || 1;
    }

    get CanvasWidth() {
        return this._width;
    }
    get CanvasHeight() {
        return this._height;
    }
    get X() {
        return this._x;
    }
    get Y() {
        return this._y;
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
    get LeftX() {
        return this._x - this.WidthRadius;
    }
    get RightX() {
        return this._x + this.WidthRadius;
    }
    get TopY() {
        return this._y - this.HeightRadius;
    }
    get BottomY() {
        return this._y + this.HeightRadius;
    }

    set X(value) {
        this._throwIfNotInteger(value, "GameElement.X");
        this._x = value;
    }
    set Y(value) {
        this._throwIfNotInteger(value, "GameElement.Y");
        this._y = value;
    }
    set Width(value) {
        this._throwIfNotOddNumber(value, "GameElement.Width");
        this._width = value;
    }

    set Height(value) {
        this._throwIfNotOddNumber(value, "GameElement.Height");
        this._height = value;
    }

    startNewGame() {
        this.X = 0;
        this.Y = 0;
        this.Width = 1;
        this.Height = 1;
    }

    draw(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(this.LeftX, this.TopY, this.Width, this.Height);
    }

    _throwIfNotInteger(value, valueName) {
        if (!Number.isInteger(value)) throw `${valueName} must be an integer`;
    }

    _throwIfNotOddNumber(value, valueName) {
        this._throwIfNotInteger(value, valueName);
        if (value % 2 === 0) throw `${valueName} must be an odd number`;
    }

}