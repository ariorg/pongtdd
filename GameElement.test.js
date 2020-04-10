'use strict'
import GameElement from "./GameElement";

describe("GameElement class tests", () => {
    test("Element creation without parameters hould have x,y coordinates, width and height equal to zero", () => {
        const ball = new GameElement();
        expect([ball.X, ball.Y, ball.Width, ball.Height]).toStrictEqual([0, 0, 0, 0]);
    });

    test("Element creation with constructor parameters should set X,Y,Width and Height properties", () => {
        const ball = new GameElement(null, 100, 200, 30, 10);
        expect([ball.X, ball.Y, ball.Width, ball.Height]).toStrictEqual([100, 200, 30, 10]);
    });

    test("Element creation with x,y parameters only should set Width and Height to zero", () => {
        const ball = new GameElement(null, 100, 200);
        expect([ball.X, ball.Y, ball.Width, ball.Height]).toStrictEqual([100, 200, 0, 0]);
    });

    test("Setters should set their propperties", () => {
        const ge = new GameElement();
        ge.X = 101;
        ge.Y = 102;
        ge.Width = 201;
        ge.Height = 202;
        expect([ge.X, ge.Y, ge.Width, ge.Height]).toStrictEqual([101, 102, 201, 202]);
    });

    test("startNewGame method should set coords and shape size to zero", () => {
        const ge = new GameElement();
        ge.X = ge.Y = ge.Width = ge.Height = 1;
        expect(ge.X + ge.Y + ge.Width + ge.Height).toBe(4);
        ge.startNewGame();
        expect(ge.X + ge.Y + ge.Width + ge.Height).toBe(0);
    });
});