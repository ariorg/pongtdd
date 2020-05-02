import GameElement from "./GameElement.js";

export default class MovingGameElement extends GameElement {
    constructor(ctx, width, height) {
        super(ctx, width, height);
        this.XDirection = 0;
        this.YDirection = 0;
        this.Speed = 0;
    }

    get XDirection() {
        return this._xDirection;
    }

    get YDirection() {
        return this._yDirection;
    }

    get Speed() {
        return this._speed;
    }

    set XDirection(value) {
        this._throwIfNotDirectionValue(value);
        this._xDirection = value;
    }

    set YDirection(value) {
        this._throwIfNotDirectionValue(value);
        this._yDirection = value;
    }

    set Speed(value) {
        this._speed = value;
    }

    update() {
        this.X = this.X + this.XDirection * this.Speed;
        this.Y = this.Y + this.YDirection * this.Speed;
    }
    
    _throwIfNotDirectionValue(value) {
        if (![-1, 0, 1].includes(value))
            throw ("Direction can only be -1, 0 or 1");
    }
}
