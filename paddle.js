'use strict'
import GameElement from "./GameElement";

export default class Paddle extends GameElement {
    constructor(ctx, width, height) {
        super(ctx, 0, 0, width || 0, height || 0);
        //this.setNewGamePosition()
    }
}