import SoundPlayer from '../js/SoundPlayer.js';

describe('constructor', () => {
    it('should create a SoundPlayer', () => {
        const sp = new SoundPlayer();
        expect(sp).toBeDefined();
    });
});
