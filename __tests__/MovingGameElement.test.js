import MovingGameElement from '../js/MovingGameElement.js';

describe('MovingGameElement class tests', () => {
  describe('Constructor', () => {
    it('Should create MovingGameElement with zero X/Ydirection', () => {
      const ctx = document.createElement('canvas').getContext('2d');
      let mge = new MovingGameElement(ctx);
      expect(mge.XDirection).toBe(0);
      expect(mge.YDirection).toBe(0);
      expect([0, 1]).toContain(mge.XSpeed);
      expect([0, 1]).toContain(mge.YSpeed);
    });
  });

  describe('Setters and getters', () => {
    const ctx = document.createElement('canvas').getContext('2d');
    let mge = new MovingGameElement(ctx);

    test('set X/YSpeed should set X/YSpeed', () => {
      mge.XSpeed = mge.YSpeed = 0;
      expect(mge.XSpeed).toBe(0);
      expect(mge.YSpeed).toBe(0);

      mge.XSpeed = 123;
      mge.YSpeed = 321;
      expect(mge.XSpeed).toBe(123);
      expect(mge.YSpeed).toBe(321);
    });

    test('Set X/Ydirection should throw if not a valid direction', () => {
      expect(() => { mge.YDirection = 0; }).not.toThrow();
      expect(() => { mge.XDirection = -1; }).not.toThrow();

      expect(() => { mge.YDirection = -2; }).toThrow();
      expect(() => { mge.XDirection = 10; }).toThrow();
    });
  });
});
