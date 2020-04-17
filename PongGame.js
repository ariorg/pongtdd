'use strict';

import Ball from './Ball';
import Paddle from './Paddle';

export default class PongGame {
    constructor(ctx2D) {
        this._ctx = ctx2D;
        this._score = 0;
        this._paddle = new Paddle(this._ctx);
        this._ball = new Ball(this._ctx);
    }

    get CanvasWidth() {
        return this._ctx.canvas.width;
    }

    get CanvasHeight() {
        return this._ctx.canvas.height;
    }
    get Score() {
        return this._score;
    }

    get Paddle() {
        return this._paddle;
    }

    startNewGame() {
        // this.Paddle.Y = this.CanvasHeight - Paddle.HeightRadius - 1;
        // this.Paddle.X = Math.floor(Math.random() * (this.CanvasWidth - 2 * this.Paddle.WidthRadius) + Paddle.WidthRadius);
        this.Paddle.startNewGame();
    }
}
