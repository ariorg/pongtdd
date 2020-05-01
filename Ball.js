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
        this.Y = paddle.YTop - this.HeightRadius - 1;
        const leftXLimit = paddle.XLeft + this.WidthRadius;
        const randomXPlacementDeltaLimit = paddle.Width - 2 * this.WidthRadius;
        this.X = leftXLimit + Math.floor(Math.random() * randomXPlacementDeltaLimit);
        this.YDirection = -1;
        this.XDirection = 1;
        this.Speed = 1;
        this.draw();
    }

    update(paddle) {
        this._ifCollisionSetNewDirection(paddle);
        this.X = this.X + this.XDirection * this.Speed;
        this.Y = this.Y + this.YDirection * this.Speed;
    }

    draw() {
        this._ctx.beginPath();
        this._ctx.arc(this.X, this.Y, this.Radius + 1, 0, Math.PI * 2);
        this._ctx.fillStyle = "blue";
        this._ctx.fill();
        this._ctx.closePath();
    }

    _ifCollisionSetNewDirection(paddle) {
        if (this.XLeft <= 0)
            this.XDirection = 1;

        if (this.XRight >= this._ctx.canvas.width - 1)
            this.XDirection = -1;

        if (this.YTop <= 0)
            this.YDirection = 1;

        if (
            (this.YBottom >= paddle.YTop - 1 && this.XRight >= paddle.XLeft && this.XLeft <= paddle.XRight) || 
            (this.YBottom >= this._ctx.canvas.height - 1)
           )
            this.YDirection = -1;
    }
}
