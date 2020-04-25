import MovingGameElement from "./MovingGameElement.js";

export default class Ball extends MovingGameElement {
    constructor(ctx, radius) {
        super(ctx, radius * 2 + 1, radius * 2 + 1);
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
        const leftXLimit = paddle.LeftX + this.WidthRadius;
        const randomXPlacementDeltaLimit = paddle.Width - 2 * this.WidthRadius;
        this.X = leftXLimit + Math.floor(Math.random() * randomXPlacementDeltaLimit);
        this.draw();
    }

    update() {
        if (this.Y === 0)
            this.YDirection = 1;
        this.X = Math.floor(this.X + this.XDirection * this.Speed);
        this.Y = Math.floor(this.Y + this.YDirection * this.Speed);
    }
    
    draw() {
        this._ctx.beginPath();
        this._ctx.arc(this.X, this.Y, this.Radius + 1, 0, Math.PI * 2);
        this._ctx.fillStyle = "blue";
        this._ctx.fill();
        this._ctx.closePath();
    }
}
