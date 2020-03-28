const { Game } = require('./pong')

test('Create pong game', () => {
    let g = new Game();
    expect(typeof g != "undefined").toBeTruthy();
});