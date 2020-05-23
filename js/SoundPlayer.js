export default class SoundPlayer {
  constructor(volume, soundFilePath) {
    this.Volume = volume || 1.0;
    this._soundFilePath = soundFilePath || '/media';
  }

  set Volume(value) {
    this._volume = value;
  }
  get Volume() {
    return this._volume;
  }

  set SoundFilePath(value) {
    this._soundFilePath = value;
  }
  get SoundFilePath() {
    return this._soundFilePath;
  }

  play(soundFileName, volume) {
    if (volume) this.Volume = volume;
    const snd = new Audio(this.SoundFilePath + soundFileName);
    snd.volume = this.Volume;
    snd.play();
  }
}

export const PongSounds = {
  COLLISION_BALL_WALL: 'file.wav',
  COLLISION_BALL_PADDLE: 'file2.mp3',
  GAME_OVER: 'gameover.wav',
};
