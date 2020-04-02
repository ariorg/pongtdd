'use strict';

import GameElement from "./game-element";

export class Ball extends GameElement {
    constructor(x, y, radius) {
        if (arguments.length === 0)
            super();
        else
            super(x, y, radius * 2, radius * 2);
    }
    get Diameter() {
        return this.Width
    }
    get Radius() {
        return this.Width / 2
    }

    set Diameter(value) {
        this.Width = value;
    }
    set Radius(value) {
        this.Width = value * 2;
    }
}

export class Paddle extends GameElement {}

export class Game {
    constructor(canvas) {
        this._canvas = canvas;
        this._ctx = canvas.getContext("2d");
        this._canvasWidth = this._ctx.canvas.width;
        this._canvasHeight = this._ctx.canvas.height;
        this._score = 0;
    }

    get CanvasWidth() {
        return this._canvasWidth;
    }

    get CanvasHeight() {
        return this._canvasHeight;
    }
    get Score() {
        return this._score;
    }
}
