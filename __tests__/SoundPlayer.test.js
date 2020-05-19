import SoundPlayer from '../js/SoundPlayer.js';

describe('SoundPlayer tests', () => {
  describe('constructor', () => {
    it('should create a SoundPlayer', () => {
      const sp = new SoundPlayer();
      expect(sp).toBeDefined();
    });
  });

  describe('PlaySound method', () => {
    it.skip('should play sound', () => {
      const sp = new SoundPlayer();
      // Todo: Mock soundplayer - see here:
      //       https://jestjs.io/docs/en/es6-class-mocks
    });
  });
});
