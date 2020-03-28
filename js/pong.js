'use strict'

class PongGame {
    constructor(width, height) {
        this._canvasWidth = 1280;
        this._canvasHeight = 960;

        // this._canvasWidth = arguments.length >= 1 ? width : 1280;
        // this._canvasHeight = arguments.length >= 2 ? height : 960;
    }

    get CanvasWidth() { return this._canvasWidth };
    get CanvasHeight() { return this._canvasHeight };
}

module.exports = { PongGame }
