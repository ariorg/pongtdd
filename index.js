"use strict";

import PongGame from "./PongGame.js";
const pg = new PongGame(document.getElementById("skjarinn").getContext('2d'));
pg.startNewGame();
