'use strict'

export default class GameElement {
    constructor(ctx, x, y, width, height) {
        this._ctx = ctx;
        this.X = x || 0;
        this.Y = y || 0;
        this.Width = width || 1;
        this.Height = height || 1;
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
        this._throwIfEvenNumber(value, "Width of a element must be odd number");
        this._width = value;
    }

    set Height(value) {
        this._throwIfEvenNumber(value, "Height of a element must be odd number");
        this._height = value;
    }

    startNewGame() {
        this.X = 0;
        this.Y = 0;
        this.Width = 1;
        this.Height = 1;
    }

    _throwIfEvenNumber(value, errorText) {
        if (value % 2 === 0) throw errorText;
    }

}