import SoundPlayer from '../js/SoundPlayer.js';
import PongSounds from '../js/PongSounds.js';

jest.mock('../js/SoundPlayer.js'); 

describe('PongSounds constructor tests', () => {
  beforeEach(() => {
    SoundPlayer.mockClear();
  });

  window.HTMLMediaElement.prototype.play = () => {};

  describe('constructor', () => {
    it('should create a PongSounds', () => {
      const ps = new PongSounds();
      expect(ps).toBeDefined();
      expect(SoundPlayer).toHaveBeenCalledTimes(1);
    });
  });

  describe('pong sounds', () => {
    it('should play pong sounds', () => {
      const ps = new PongSounds();
      ps.gameOver();
      ps.ballCollidesWithWall();
      ps.ballCollidesWithPaddle()
      expect(SoundPlayer.mock.instances[0].play).toHaveBeenCalledTimes(3);
    });
  });
});
