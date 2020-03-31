"use strict";

import { Game, Ball, Paddle, GameElement } from "./pong.js";

let canvas = document.getElementById("skjarinn");
let ctx = canvas.getContext("2d");
let pongGame = new Game(ctx);