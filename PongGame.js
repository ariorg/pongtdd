'use strict';

import Ball from './Ball';
import Paddle from './Paddle';



export default class PongGame {

    constructor(canvas) {
        this._canvas = canvas;
        this._ctx = canvas.getContext("2d");
        this._canvasWidth = this._ctx.canvas.width;
        this._canvasHeight = this._ctx.canvas.height;
        this._score = 0;
        this._paddle = new Paddle();
        this._ball = new Ball();
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
