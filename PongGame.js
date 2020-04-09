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

    startNewGame() {
        
    }
}
