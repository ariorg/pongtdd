'use strict'

class GameElement {
    constructor() {
        this._x = this._y = this._height = this._width = 0;
    }

    get X() { return this._x }
    get Y() { return this._y }
    get Width() { return this._width }
    get Height() { return this._height }

    set X(value) { this._x = value }
    set Y(value) { this._y = value }
    set Width(value) { this._width = value }
    set Height(value) { this._height = value }
}

class PongBall extends GameElement {
    constructor() {
        super();
        this._diameter = 10;
    }
    get Diameter() { return this._diameter }
    set Diameter(value) { 
        this._diameter = value;
    }
}

class PongGame {
    constructor(width, height) {
        this._canvasWidth = arguments.length >= 1 ? width : 1280;
        this._canvasHeight = arguments.length >= 2 ? height : 960;
        this._score = 0;
    }

    get CanvasWidth() { return this._canvasWidth }
    get CanvasHeight() { return this._canvasHeight }
    get Score() { return this._score }
}

module.exports = { PongGame, PongBall, GameElement };
