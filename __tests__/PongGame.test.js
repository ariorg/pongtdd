import PongGame from '../js/PongGame.js';

describe('PongGame class', () => {
  window.HTMLMediaElement.prototype.play = () => {};
  describe('constructor', () => {
    test('Create pong game', () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      let pg = new PongGame(ctx);
      expect(typeof pg != 'undefined').toBeTruthy();
    });

    test('New Game has default sized canvas', () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const pg = new PongGame(ctx);
      expect(pg._ctx.canvas.width).toBeGreaterThan(0);
      expect(pg._ctx.canvas.height).toBeGreaterThan(0);
    });

    test('Width and height of passed in canvas is same in Game object', () => {
      const pg = _newPongGame(801, 601);
      expect(pg.CanvasWidth).toBe(801);
      expect(pg.CanvasHeight).toBe(601);
    });

    test('Game should have an initial score of zero', () => {
      const g = _newPongGame();
      expect(g.Score).toBe(0);
    });

    test('PonjgGame constructor should create 1 instance of a Paddle and 1 of a Ball', () => {
      const g = _newPongGame();
      expect(g.Paddle).toBeDefined();
      expect(g.Paddle.WidthRadius).toBeGreaterThan(0);
      expect(g.Ball).toBeDefined();
      expect(g.Ball.Radius).toBeGreaterThanOrEqual(0);
    });
  });

  describe('resetGame', () => {
    test('resetGame make Paddle at the bottom of the screen', () => {
      const width = 840;
      const height = 960;
      const g = _newPongGame(width, height);
      g.reset();
      expect(g.Paddle.Y).toBe(height - 1 - g.Paddle.HeightRadius);
      expect(g.Paddle.X).toBeGreaterThanOrEqual(g.Paddle.WidthRadius);
      expect(g.Paddle.X).toBeLessThan(width - g.Paddle.WidthRadius - 1);
    });

    test('resetGame should place Ball on random location on top of Paddle', () => {
      const g = _newPongGame();
      g.reset();
      expect(g.Ball.YBottom).toBe(g.Paddle.YTop - 1);
      expect(g.Ball.XLeft).toBeGreaterThanOrEqual(g.Paddle.XLeft);
      expect(g.Ball.XRight).toBeLessThanOrEqual(g.Paddle.XRight);
    });
  });

  describe('methods', () => {
    test('Run should start game loop by calling requestAnimationFrame(run)', () => {
      const rafSpy = jest.spyOn(global, 'requestAnimationFrame');
      const game = _newPongGame();
      game.run();
      expect(rafSpy).toHaveBeenCalledWith(game.run);
      expect(rafSpy).toHaveBeenCalledTimes(1);
    });

    test('Run should update ball and paddle', () => {
      const game = _newPongGame();
      const ballUpdateSpy = jest.spyOn(game.Ball, 'update');
      const paddleUpdateSpy = jest.spyOn(game.Paddle, 'update');
      game.run();
      expect(paddleUpdateSpy).toHaveBeenCalledTimes(1);
      expect(ballUpdateSpy).toHaveBeenCalledTimes(1);
    });
  });

  const _newPongGame = (width, height) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.canvas.width = width || 800;
    ctx.canvas.height = height || 600;
    return new PongGame(ctx);
  };
});
