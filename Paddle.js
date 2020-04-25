import MovingGameElement from "./MovingGameElement.js";

export default class Paddle extends MovingGameElement {
    constructor(ctx, width, height) {
        super(ctx, width || 0, height || 0);
    }

    startNewGame() {
        this.Y = this._ctx.canvas.height - 1 - this.HeightRadius;
        this.X = this.WidthRadius + Math.floor(Math.random() * (this._ctx.canvas.width - 2 * this.WidthRadius));
        this.draw();
    }
}
