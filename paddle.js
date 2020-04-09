'use strict'
import GameElement from "./GameElement";

export default class Paddle extends GameElement {
    constructor(ctx, width, height) {
        if (arguments.length <= 1)
            super(ctx);
        else
            super(ctx, 0, 0, width, height);
    }
}