import Input from '../js/Input.js'

describe("Input class tests", () => {
  describe("constructor", () => {
    test("Input creation", () => {
      const input = new Input();
      expect(input).toBeDefined();
      expect(input.IsLeftKeyPressed).toBeFalsy();
      expect(input.IsRightKeyPressed).toBeFalsy();
    });
  });
});
