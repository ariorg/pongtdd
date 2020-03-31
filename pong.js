'use strict';

class GameElement {
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

class Ball extends GameElement {
    constructor(x, y, radius) {
        if (arguments.length === 0)
            super();
        else
            super(x, y, radius * 2, radius * 2);
    }
    get Diameter() {
        return this.Width
    }
    get Radius() {
        return this.Width / 2
    }

    set Diameter(value) {
        this.Width = value;
    }
    set Radius(value) {
        this.Width = value * 2;
    }
}

class Paddle extends GameElement {}

class Game {
    constructor(canvas) {
        this._canvasWidth = arguments.length >= 1 ? canvas.width : 1280;
        this._canvasHeight = arguments.length >= 2 ? canvas.height : 960;
        this._score = 0;
    }

    get CanvasWidth() {
        return this._canvasWidth;
    }
    get CanvasHeight() {
        return this._canvasHeight;
    }
    get Score() {
        return this._score;
    }
}

export {
    Game,
    Ball,
    Paddle,
    GameElement
};