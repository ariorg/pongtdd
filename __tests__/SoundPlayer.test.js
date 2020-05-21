import SoundPlayer from '../js/SoundPlayer.js';

describe('SoundPlayer tests', () => {
  describe('constructor', () => {
    it('should create a SoundPlayer', () => {
      const sp = new SoundPlayer();
      expect(sp).toBeDefined();
      expect(sp.Volume).toBe(1.0);
    });
  });

  describe('PlaySound method', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should play sound', () => {
      window.HTMLMediaElement.prototype.play = () => {};
      const sp = new SoundPlayer();
      const playSpy = jest.spyOn(sp, 'play');
      const soundFileName = 'sound.wav';
      sp.play(soundFileName);
      expect(playSpy).toHaveBeenCalledWith(soundFileName);
      expect(playSpy).toHaveBeenCalledTimes(1);
    });
  });
});
