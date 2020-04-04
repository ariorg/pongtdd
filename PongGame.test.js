'use strict';

import 'jest-canvas-mock';
import PongGame from './PongGame';
import Paddle from './Paddle';
import Ball from './Ball';

jest.mock('./Paddle');
jest.mock('./Ball');

describe("PongGame class", () => {
  describe("constructor", () => {
    test("Create pong game", () => {
      let pg = new PongGame(document.createElement("canvas"));
      expect(typeof pg != "undefined").toBeTruthy();
      console.log(typeof pg);
    });

    test("New Game has default sized canvas", () => {
      const pg = new PongGame(document.createElement("canvas"));
      expect(pg.CanvasWidth).toBeGreaterThan(0);
      expect(pg.CanvasHeight).toBeGreaterThan(0);
    });

    test("Width and height of passed in canvas is same in Game object", () => {
      const canvas = document.createElement("canvas");
      canvas.width = 801;
      canvas.height = 601;
      const pg = new PongGame(canvas);
      expect(pg.CanvasWidth).toBe(801);
      expect(pg.CanvasHeight).toBe(601);
    });

    test("Game should have an initial score of zero", () => {
      const g = new PongGame(document.createElement("canvas"));
      expect(g.Score).toBe(0);
    });

    test('New PongGame should create one Paddle and one Ball objects', () => {

      const g = new PongGame(document.createElement("canvas"));
      expect(Paddle).toHaveBeenCalledTimes(1);
      expect(Ball).toHaveBeenCalledOnce();
    });
  });
});