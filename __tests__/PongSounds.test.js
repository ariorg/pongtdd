import PongSounds from '../js/PongSounds.js';

describe('PongSounds constructor tests', () => {
  window.HTMLMediaElement.prototype.play = () => {};

  describe('constructor', () => {
    it('should create a PongSounds', () => {
      const ps = new PongSounds();
      expect(ps).toBeDefined();
    });
  });
  
  describe('pong sounds', () => {
    it.skip('should play pong sounds', () => {
      const sp = new SoundPlayer();
      expect(sp).toBeDefined();
    });
  });
});
