export default class GameElement {
    constructor(x, y, width, height) {
        this._x = arguments.length >= 1 ? x : 0;
        this._y = arguments.length >= 2 ? y : 0;
        this._width = arguments.length >= 3 ? width : 0;
        this._height = arguments.length >= 4 ? height : 0;
    }

    get X() {
        return this._x;
    }
    get Y() {
        return this._y;
    }
    get Width() {
        return this._width;
    }
    get Height() {
        return this._height;
    }

    set X(value) {
        this._x = value;
    }
    set Y(value) {
        this._y = value;
    }
    set Width(value) {
        this._width = value;
    }
    set Height(value) {
        this._height = value;
    }
}
