'use strict'
import GameElement from "./GameElement";
// jsut for triggering git commit - temporary
export default class Ball extends GameElement {
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
