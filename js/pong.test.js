const { Game, Ball, Paddle, GameElement } = require("./pong");

describe("GameElement", () => {
  test("Element creation without parameters hould have x,y coordinates, width and height equal to zero", () => {
    const ball = new GameElement();
    expect(ball.X).toBe(0);
    expect(ball.Y).toBe(0);
    expect(ball.Width).toBe(0);
    expect(ball.Height).toBe(0);
  });

  test("Element creation with constructor parameters should set X,Y,Width and Height properties", () => {
    const ball = new GameElement(100, 200, 30, 10);
    expect([ball.X, ball.Y, ball.Width, ball.Height]).toStrictEqual([100, 200, 30, 10]);
  });

  test("Element creation with x,y parameters only should set Width and Height to zero", () => {
    const ball = new GameElement(100, 200);
    expect([ball.X, ball.Y, ball.Width, ball.Height]).toStrictEqual([100, 200, 0, 0]);
  })

});

describe("Ball", () => {
  test("Create new Ball should set coords and diameter to zero", () => {
    const pb = new Ball();
    expect(pb.X).toBe(0);
    expect(pb.Y).toBe(0);
    expect(pb.Diameter).toBe(0);
  });

  test("Construct Ball with parameters should set X,Y,Radius and Diameter properties", () => {
    const ball = new Ball(100, 200, 10);
    expect([ball.X, ball.Y, ball.Radius, ball.Diameter]).toStrictEqual([100, 200, 10, 20]);
  });


  test("Set ball coordinates", () => {
    const ball = new Ball();
    ball.X = 40;
    ball.Y = 20;
    expect(ball.X).toBe(40);
    expect(ball.Y).toBe(20);
  });

  test("Set ball diameter to x should set it to x and Radius to x/2", () => {
    const ball = new Ball();
    ball.Diameter = 40;
    expect(ball.Diameter).toBe(40);
    expect(ball.Radius).toBe(20);
  });
});

describe("Paddle", () => {
  test("Construct Paddle without parameters should set coordinates and size to zero", () => {
    const ball = new Paddle();
    expect([ball.X, ball.Y, ball.Width, ball.Height]).toStrictEqual([0, 0, 0, 0]);
  });

  test("Construct Paddle with parameters should set X,Y,Width and Height properties", () => {
    const ball = new Paddle(123, 234, 34, 12);
    expect([ball.X, ball.Y, ball.Width, ball.Height]).toStrictEqual([123, 234, 34, 12]);
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