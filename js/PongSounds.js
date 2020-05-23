import SoundPlayer from '../js/SoundPlayer.js';

const PongSoundsEnum = {
  COLLISION_BALL_WALL: {
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
    this._play(PongSoundsEnum.GAME_OVER);
  }

  ballCollidesWithWall() {
    this._play(PongSoundsEnum.COLLISION_BALL_WALL);
  }

  ballCollidesWithPaddle() {
    this._play(PongSoundsEnum.COLLISION_BALL_PADDLE);
  }

  _play(sound) {
    this._soundPlayer.play(sound.FILE, sound.VOLUME);
  }
}



