import SoundPlayer from '../js/SoundPlayer.js';

describe('SoundPlayer tests', () => {
  describe('constructor', () => {
    it('should create a SoundPlayer', () => {
      const sp = new SoundPlayer();
      expect(sp).toBeDefined();
    });
  });

  describe('PlaySound method', () => {
    afterEach(() => { jest.clearAllMocks(); });

    it('should play sound', () => {
      const sp = new SoundPlayer();
      const playSpy = jest.spyOn(sp, 'play');
      const soundFileName = 'sound.wav';
      sp.play(soundFileName);
      expect(playSpy).toHaveBeenCalledWith(soundFileName);
      expect(playSpy).toHaveBeenCalledTimes(1);
    });
  });
});
