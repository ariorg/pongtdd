'use strict';

import Ball from './Ball';
import Paddle from './Paddle';


export default class PongGame {

    constructor(ctx2D) {
        this._ctx = ctx2D;
        this._score = 0;
        this._paddle = new Paddle();
        this._ball = new Ball();
    }

    get CanvasWidth() {
        return this._.canvas.width;
    }

    get CanvasHeight() {
        return this._.canvas.height;
    }
    get Score() {
        return this._score;
    }
}
