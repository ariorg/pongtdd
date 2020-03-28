const { PongGame } = require('./pong')

test('Create pong game', () => {
    let pg = new PongGame();
    expect(typeof pg != "undefined").toBeTruthy();
});

test('New PongGame has default sized canvas', () => {
    let pg = new PongGame();
    expect(pg.CanvasWidth).toBe(1280);
    expect(pg.CanvasHeight).toBe(960);
})
