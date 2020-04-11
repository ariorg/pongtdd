'use strict';
import Ball from './Ball';

describe("Ball class tests", () => {
    const ctx = document.createElement("canvas").getContext('2d');

    test("Ball creation", () => {
        const ball = new Ball(ctx);
        expect(ball).toBeDefined();
    });

    test("Ball creation with no params should have coords 0,0 ", () => {
        const ball = new Ball(ctx);
        expect(ball.X).toBe(0);
        expect(ball.Y).toBe(0);
    });

    test("Ball created with no radius should have Radius=0 and Diameter=1", () => {
        const ball = new Ball(ctx);
        expect(ball.Radius).toBe(0);
        expect(ball.Diameter).toBe(1);
    });

    test("Set Diameter should set Radius and vice versa", () => {
        const ball = new Ball(ctx);
        ball.Diameter = 11;
        expect(ball.Radius).toBe(5);
        ball.Radius = 9;
        expect(ball.Diameter).toBe(9 + 9 + 1);
    });

    test("Diameter cannot be an even number and must be an integer", () => {
        const ball = new Ball(ctx);
        expect(() => { ball.Diameter = 10;   }).toThrow();
        expect(() => { ball.Diameter = 9.01; }).toThrow();
    });
});
