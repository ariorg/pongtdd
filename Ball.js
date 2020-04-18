'use strict'
import GameElement from "./GameElement";

export default class Ball extends GameElement {
    constructor(ctx, x, y, radius) {
        super(ctx, x, y, radius * 2, radius * 2);
    }
    get Diameter() {
        return this.Width
    }
    get Radius() {
        return this.WidthRadius;
    }

    set Diameter(value) {
        this.Width = value;
    }
    set Radius(value) {
        this.Width = value * 2 + 1;
    }

    startNewGame(paddle) {
        this.Y = paddle.TopY - this.HeightRadius - 1;
        const leftXLimit = paddle.LeftX + this.WidthRadius + 1;
        const randomXPlacementDeltaLimit = paddle.Width - this.WidthRadius - 1;
        const randomXDelta = Math.floor(Math.random() * randomXPlacementDeltaLimit);
        this.X = leftXLimit + randomXDelta;
    }
}