import SoundPlayer from '../js/SoundPlayer.js';

describe('SoundPlayer tests', () => {
  window.HTMLMediaElement.prototype.play = () => {};

  describe('constructor', () => {
    it('should create a SoundPlayer', () => {
      const sp = new SoundPlayer();
      expect(sp).toBeDefined();
      expect(sp.Volume).toBe(1.0);
    });

    it('should set volume if constructed with volume parameter', () => {
      const expected = 0.432;
      const sp = new SoundPlayer(expected);
      expect(sp.Volume).toBe(expected);
    });
  });

  describe('getters and setters', () => {
    it('Should set and get Volume', () => {
      const sp = new SoundPlayer();
      expect(sp.Volume).toBe(1.0);
      const expected = 0.234;
      sp.Volume = expected;
      expect(sp.Volume).toBe(expected);
    });
  });

  describe('PlaySound method', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should play sound', () => {
      const sp = new SoundPlayer();
      const playSpy = jest.spyOn(sp, 'play');
      const soundFileName = 'sound.wav';
      sp.play(soundFileName);
      expect(playSpy).toHaveBeenCalledWith(soundFileName);
      expect(playSpy).toHaveBeenCalledTimes(1);
    });

    it('should set volume if passed', () => {
      const sp = new SoundPlayer();
      expect(sp.Volume).toBe(1.0);
      const expected = 0.654;
      sp.play('anyfilename.wav', expected);
      expect(sp.Volume).toBe(expected);
    });
  });
});
