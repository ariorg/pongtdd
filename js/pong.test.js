const { Game, Ball, GameElement } = require("./pong");

describe("GameElement", () => {
  test("Element creation without parameters hould have x,y coordinates, width and height equal to zero", () => {
    const e = new GameElement();
    expect(e.X).toBe(0);
    expect(e.Y).toBe(0);
    expect(e.Width).toBe(0);
    expect(e.Height).toBe(0);
  });

  test("Element creation with constructor parameters should set X,Y,Width and Height properties", () => {
    const e = new GameElement(100, 200, 30, 10);
    expect([e.X, e.Y, e.Width, e.Height]).toStrictEqual([100, 200, 30, 10]);
  });

  test("Element creation with x,y parameters only should set Width and Height to zero", () => {
    const e = new GameElement(100, 200);
    expect([e.X, e.Y, e.Width, e.Height]).toStrictEqual([100, 200, 0, 0]);
  })

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