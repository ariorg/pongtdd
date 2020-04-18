'use strict'
import GameElement from "./GameElement";

export default class Paddle extends GameElement {
    constructor(canvasWidth, canvasHeight, width, height) {
        super(canvasWidth, canvasHeight, 0, 0, width || 0, height || 0);
    }

    startNewGame(ctx) {
        this.Y = ctx.canvas.height - 1 - this.HeightRadius - 1;
        this.X = this.WidthRadius + Math.floor(Math.random() * (ctx.canvas.width - 1 - 2 * this.WidthRadius));
    }
}