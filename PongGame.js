import Ball from './Ball.js';
import Paddle from './Paddle.js';

export default class PongGame {
    constructor(ctx) {
        this._ctx = ctx;
        this._score = 0;
        this._paddle = new Paddle(this._ctx, 85, 13);
        this._ball = new Ball(this._ctx, 10, 10, 5);
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
