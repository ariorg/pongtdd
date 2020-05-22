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
    const snd = new Audio(soundFileName);
    snd.volume = this.Volume;
    snd.play();
  }
}
