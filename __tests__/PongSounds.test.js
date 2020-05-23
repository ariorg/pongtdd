import SoundPlayer from '../js/PongSounds.js';

describe('PongSounds constructor tests', () => {
  window.HTMLMediaElement.prototype.play = () => {};

  describe('constructor', () => {
    it('should create a PongSounds', () => {
      const sp = new SoundPlayer();
      expect(sp).toBeDefined();
    });
  });
});
