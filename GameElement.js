'use strict'

export default class GameElement {
    constructor(ctx, x, y, width, height) {
        this._ctx = ctx;
        this._x = x || 0;
        this._y = y || 0;
        this._width = width || 0;
        this._height = height || 0;
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

    set X(value) {
        this._x = value;
    }
    set Y(value) {
        this._y = value;
    }
    set Width(value) {
        this._width = value;
    }
    set Height(value) {
        this._height = value;
    }

    startNewGame() {
        this.X = 0;
        this.Y = 0;
        this.Width = 0;
        this.Height = 0;
    }
}