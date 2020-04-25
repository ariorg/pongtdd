import GameElement from "./GameElement.js";

export default class MovingGameElement extends GameElement {
    constructor(ctx, width, height) {
        super(ctx, width, height);
        this._xDirection = 0;
        this._yDirection = 0;
        this._speed = 0;
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

    _throwIfNotDirectionValue(value) {
        if (![-1, 0, 1].includes(value))
            throw ("Direction can only be -1, 0 or 1");
    }
}
