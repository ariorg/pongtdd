const { Game, Ball, GameElement } = require("./pong");

describe("GameElement", () => {
  test("should have x,y coordinates, width and height equal to zero after creation", () => {
    const s = new GameElement();
    expect(s.X).toBe(0);
    expect(s.Y).toBe(0);
    expect(s.Width).toBe(0);
    expect(s.Height).toBe(0);
  });
});

describe("Ball", () => {
  test("Create new Ball should have coords 0,0 and diameter > 0", () => {
    const pb = new Ball();
    expect(pb.X).toBe(0);
    expect(pb.Y).toBe(0);
    expect(pb.Diameter).toBeGreaterThan(0);
  });

  test("Set ball coordinates", () => {
    const ball = new Ball();
    ball.X = 40;
    ball.Y = 20;
    expect(ball.X).toBe(40);
    expect(ball.Y).toBe(20);
  });

  test("Set ball diameter to x should be x", () => {
    const ball = new Ball();
    const newD = ball.Diameter + 5;
    ball.Diameter = newD;
    expect(ball.Diameter).toBe(newD);
  });
});

describe("Game", () => {
    test("Create pong game", () => {
      let pg = new Game();
      expect(typeof pg != "undefined").toBeTruthy();
    });
  
    test("New Game has default sized canvas", () => {
      const pg = new Game();
      expect(pg.CanvasWidth).toBeGreaterThan(0);
      expect(pg.CanvasHeight).toBeGreaterThan(0);
    });
  
    test("Create Game with nondefault canvas size", () => {
      const pg1 = new Game();
      const w = pg1.CanvasWidth + 15;
      const h = pg1.CanvasHeight + 15;
      const pg = new Game(w, h);
      expect(pg.CanvasWidth).toBe(w);
      expect(pg.CanvasHeight).toBe(h);
    });
  
    test("Game should have an initial score of zero", () => {
      const g = new Game();
      expect(g.Score).toBe(0);
    });
  });