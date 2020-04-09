'use strict'

export default class GameElement {
    constructor(ctx, x, y, width, height) {
        this._ctx = ctx;
        const numPars = arguments.length;
        this._x = numPars >= 2 ? x : 0;
        this._y = numPars >= 3 ? y : 0;
        this._width = numPars >= 4 ? width : 0;
        this._height = numPars >= 5 ? height : 0;
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
}