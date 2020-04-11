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
    get WidthRadius() {
        return (this.Width - 1) / 2;
    }
    get HeightRadius() {
        return (this.Height - 1) / 2;
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

    _throwIfNotInteger(value, valueName) {
        if (!Number.isInteger(value)) throw `${valueName} must be an integer`;
    }

    _throwIfNotOddNumber(value, valueName) {
        this._throwIfNotInteger(value, valueName);
        if (value % 2 === 0) throw `${valueName} must be an odd number`;
    }

}