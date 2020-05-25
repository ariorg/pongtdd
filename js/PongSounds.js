import SoundPlayer from '../js/SoundPlayer.js';

const PongSound = {
  COLLISION_BALL_BORDER: {
    FILE: 'tick.mp3',
    VOLUME: 0.5,
  },
  COLLISION_BALL_PADDLE: {
    FILE: 'button-16.wav',
    VOLUME: 0.5,
  },
  GAME_OVER: {
    FILE: 'gameover.wav',
    VOLUME: 0.5,
  },
};

export default class PongSounds {
  constructor() {
    this._soundPlayer = new SoundPlayer(0.5);
  }

  gameOver() {
    this._play(PongSound.GAME_OVER);
  }

  ballCollidesWithBorder() {
    this._play(PongSound.COLLISION_BALL_BORDER);
  }

  ballCollidesWithPaddle() {
    this._play(PongSound.COLLISION_BALL_PADDLE);
  }

  _play(sound) {
    this._soundPlayer.play(sound.FILE, sound.VOLUME);
  }
}
