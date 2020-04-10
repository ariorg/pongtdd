'use strict'
import GameElement from "./GameElement";

describe("GameElement class tests", () => {
    test("Element creation without parameters should set x,y to 0, and width and height equal to 1", () => {
        const ball = new GameElement();
        expect([ball.X, ball.Y, ball.Width, ball.Height]).toStrictEqual([0, 0, 1, 1]);
    });

    test("Element creation with constructor parameters should set X,Y,Width and Height properties", () => {
        const ball = new GameElement(null, 100, 200, 29, 9);
        expect([ball.X, ball.Y, ball.Width, ball.Height]).toStrictEqual([100, 200, 29, 9]);
    });

    test("Element creation with x,y parameters only should set Width and Height to 1", () => {
        const ge = new GameElement(null, 100, 200);
        expect([ge.X, ge.Y, ge.Width, ge.Height]).toStrictEqual([100, 200, 1, 1]);
    });

    test("GameElement should not accept non-even size", () => {
        expect(() => { new GameElement(null, 100, 200, 10, 7) }).toThrow();
        expect(() => { new GameElement(null, 100, 200, 19, 12) }).toThrow();
        expect(() => { new GameElement(null, 100, 200, 19, 11) }).not.toThrow();
    });

    test("Setters should set their propperties", () => {
        const ge = new GameElement();
        ge.X = 101;
        ge.Y = 102;
        ge.Width = 201;
        ge.Height = 203;
        expect([ge.X, ge.Y, ge.Width, ge.Height]).toStrictEqual([101, 102, 201, 203]);
    });

    test("startNewGame method should set coords and shape size to 1", () => {
        const ge = new GameElement();
        ge.X = ge.Y = ge.Width = ge.Height = 5;
        expect(ge.X + ge.Y + ge.Width + ge.Height).toBe(4 * 5);
        ge.startNewGame();
        expect([ge.X, ge.Y, ge.Width, ge.Height]).toStrictEqual([0, 0, 1, 1]);
    });

});