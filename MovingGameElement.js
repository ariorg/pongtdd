import GameElement from "./GameElement.js";

export default class MovingGameElement extends GameElement {
    constructor(ctx, radius) {
        super(ctx, radius);
        this._xDirection = 0;
        this._yDirection = 0;
    }

    get XDirection() {
        return this._xDirection;
    }

    get YDirection() {
        return this._yDirection;
    }

    set XDirection(value) {
        this._throwIfNotDirectionValue(value);
        this._xDirection = value;
    }

    set YDirection(value) {
        this._throwIfNotDirectionValue(value);
        return this._yDirection = value;
    }

    _throwIfNotDirectionValue(value) {
        if (![-1, 0, 1].includes(value))
            throw ("Direction can only be -1, 0 or 1");
    }
}