import PongGame from "./PongGame.js";
const pongGame = new PongGame(document.getElementById("skjarinn").getContext('2d'));
pongGame.reset();
pongGame.run();
