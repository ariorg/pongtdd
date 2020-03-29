const { PongGame, PongBall, Sprite } = require('./pong')


// PongGame tests -------------------
test('Create pong game', () => {
    let pg = new PongGame();
    expect(typeof pg != "undefined").toBeTruthy();
});

test('New PongGame has default sized canvas', () => {
    const pg = new PongGame();
    expect(pg.CanvasWidth).toBeGreaterThan(0);
    expect(pg.CanvasHeight).toBeGreaterThan(0);
});

test('Create PongGame with nondefault canvas size', () => {
    const pg1 = new PongGame();
    const w = pg1.CanvasWidth+15;
    const h = pg1.CanvasHeight+15;
    const pg = new PongGame(w, h);
    expect(pg.CanvasWidth).toBe(w);
    expect(pg.CanvasHeight).toBe(h);
});

test('Game should have an initial score of zero', () => {
    const g = new PongGame();
    expect(g.Score).toBe(0);
});

// Ball tests -------------------------
test("Create new PongBall should have coords 0,0 and diameter > 0", () => {
    const pb = new PongBall();
    expect(pb.X).toBe(0);
    expect(pb.Y).toBe(0);
    expect(pb.Diameter).toBeGreaterThan(0);
});

test("Set ball coordinates", () => {
    const ball = new PongBall();
    ball.X = 40;
    ball.Y = 20;
    expect(ball.X).toBe(40);
    expect(ball.Y).toBe(20);
});

test("Set ball diameter to x should be x", () => {
    const ball = new PongBall();
    const newD = ball.Diameter+5;
    ball.Diameter = newD;
    expect(ball.Diameter).toBe(newD);
});

// Sprite tests
describe('Sprite', () => {
    it('should have x,y coordinates and diameter equal to zero after creation', () => {
        const s = new Sprite();
        expect(s.X).toBe(0);
        expect(s.Y).toBe(0);
        expect(s.Diameter).toBe(0);
    })
});