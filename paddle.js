'use strict'
import GameElement from "./GameElement";

export default class Paddle extends GameElement {
    constructor(x, y, width, height) {
        if (arguments.length === 0)
            super();
        else
            super(x, y, width, height);
    }
}