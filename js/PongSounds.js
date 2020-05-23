import SoundPlayer from '../js/SoundPlayer.js';

const PongSoundsEnum = {
  COLLISION_BALL_WALL: 'file.wav',
  COLLISION_BALL_PADDLE: 'file2.mp3',
  GAME_OVER: 'gameover.wav',
};

export default class PongSounds {
  constructor() {
      this._soundPlayer = new SoundPlayer(0.5);
  }

  gameOver() {
      this._soundPlayer.play(PongSoundsEnum.GAME_OVER);
  }

  ballCollisionWithWall() {
      this._soundPlayer.play(PongSoundsEnum.COLLISION_BALL_WALL);
  }

  ballCollidesWithPaddle() {
      this._soundPlayer.play(PongSoundsEnum.COLLISION_BALL_PADDLE);
  }
}

