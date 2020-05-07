import Ball from './Ball.js';
import Paddle from './Paddle.js';
import Input from './Input.js';

export default class PongGame {
    constructor(ctx) {
        this._ctx = ctx;
        this._score = 0;
        this._paddle = new Paddle(this._ctx, 121, 15);
        this._ball = new Ball(this._ctx, 11);
        this.reset();
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

    reset() {
        this.Paddle.resetGame();
        this.Ball.resetGame(this.Paddle);
    }

    run = () => {
        this.Paddle.update();
        this.Ball.update(this._paddle);

        this._clearCanvas(this._ctx);
        this.Ball.draw();
        this.Paddle.draw();
        requestAnimationFrame(this.run);
    }

    _clearCanvas(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
}
