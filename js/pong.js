'use strict'

class Sprite {
    constructor() {
        this._x = this._y = this._diameter = 0;
    }

    get X() { return this._x }
    get Y() { return this._y }
    get Diameter() { return this._diameter }

}

class PongBall {
    constructor() {
        this._x = 0;
        this._y = 0;
        this._diameter = 10;
    }

    get X() { return this._x }
    get Y() { return this._y }
    get Diameter() { return this._diameter }
    set X(value) { this._x = value }
    set Y(value) { this._y = value }
    set Diameter(value) { this._diameter = value } 
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


module.exports = { PongGame, PongBall, Sprite };
