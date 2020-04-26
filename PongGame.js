import Ball from './Ball.js';
import Paddle from './Paddle.js';

export default class PongGame {
    constructor(ctx) {
        this._ctx = ctx;
        this._score = 0;
        this._paddle = new Paddle(this._ctx, 121, 15);
        this._ball = new Ball(this._ctx, 11);
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

        const clearCanvas = () => {
            this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
            this._ctx.fillStyle = '#FFFFFF';
            this._ctx.fillRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
        }
       
        const draw = () => {
            clearCanvas();
            this.Ball.update();
            this.Ball.draw();
            this.Paddle.draw();
            requestAnimationFrame(draw);
        }
        draw();
    }


}
