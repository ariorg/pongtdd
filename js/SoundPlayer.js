export default class SoundPlayer {
  constructor(volume) {
    this.Volume = volume || 1.0;
  }

  set Volume(value) {
    this._volume = value;
  }
  get Volume() {
    return this._volume;
  }

  play(soundFileName, volume) {
    if (volume) this.Volume = volume;
    const snd = new Audio('media/' + soundFileName);
    snd.volume = this.Volume;
    snd.play();
  }
}

export const PongSounds = {
  COLLISION_BALL_WALL: 'file.wav',
  COLLISION_BALL_PADDLE: 'file2.mp3',
  GAME_OVER: 'file3.wav',
};
