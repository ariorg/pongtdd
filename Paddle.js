'use strict'
import GameElement from "./GameElement";

export default class Paddle extends GameElement {
    constructor(ctx, width, height) {
        super(ctx, 0, 0, width || 0, height || 0);
    }

    startNewGame() {
        this.X = Math.floor(this._ctx.canvas.width / 2);
        this.Y = Math.floor(this._ctx.canvas.height - this.Height / 2);
    }
}