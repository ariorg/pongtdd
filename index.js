"use strict";

import Game from "./pong.js";

let canvas = document.getElementById("skjarinn");
let ctx = canvas.getContext("2d");
let pongGame = new Game(ctx);