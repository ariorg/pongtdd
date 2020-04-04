"use strict";

import PongGame from "./PongGame.js";

let canvas = document.getElementById("skjarinn");
let ctx = canvas.getContext("2d");
new PongGame(ctx).start();
