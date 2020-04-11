'use strict'
import GameElement from "./GameElement";

export default class Ball extends GameElement {
    constructor(ctx, x, y, radius) {
        super(ctx, x, y, radius * 2, radius * 2);
    }
    get Diameter() {
        return this.Width
    }
    get Radius() {
        return this.WidthRadius;
    }

    set Diameter(value) {
        this.Width = value;
    }
    set Radius(value) {
        this.Width = value * 2 + 1;
    }
}
