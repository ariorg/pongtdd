import GameElement from "./GameElement.js";

export default class MovingGameElement extends GameElement {
    constructor(ctx, width, height) {
        super(ctx, width, height);
        this.XDirection = this.YDirection = 0;
        this.XSpeed = this.YSpeed = 0;
    }

    get XDirection() {
        return this._xDirection;
    }

    get YDirection() {
        return this._yDirection;
    }

    get XSpeed() {
        return this._xSpeed;
    }

    get YSpeed() {
        return this._ySpeed;
    }

    set XDirection(value) {
        this._throwIfNotDirectionValue(value);
        this._xDirection = value;
    }

    set YDirection(value) {
        this._throwIfNotDirectionValue(value);
        this._yDirection = value;
    }

    set XSpeed(value) {
        this._xSpeed = value;
    }

    set YSpeed(value) {
        this._ySpeed = value;
    }

    update() {
        this.X = this.X + this.XDirection * this.XSpeed;
        this.Y = this.Y + this.YDirection * this.YSpeed;
    }
    
    _throwIfNotDirectionValue(value) {
        if (![-1, 0, 1].includes(value))
            throw ("Direction can only be -1, 0 or 1");
    }
}
