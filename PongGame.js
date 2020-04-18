'use strict';

import Ball from './Ball';
import Paddle from './Paddle';

export default class PongGame {
    constructor(ctx2D) {
        this._ctx = ctx2D;
        this._score = 0;
        this._paddle = new Paddle(this._ctx, 25, 9);
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

    get Ball() {
        return this._ball;
    }

    startNewGame() {
        this.Paddle.startNewGame();
        this.Ball.startNewGame(this.Paddle);
    }
}
