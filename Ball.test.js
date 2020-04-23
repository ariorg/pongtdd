'use strict';
import Ball from './Ball.js';
import Paddle from './Paddle.js';
import PongGame from './PongGame.js';
import Canvas, { createCanvas } from 'canvas';

describe("Ball class tests", () => {
    const ctx = document.createElement("canvas").getContext('2d');

    describe("Ball constructor", () => {

        test("Ball creation should set Diameter", () => {
            const radius = 3;
            const ball = new Ball(ctx, radius);
            expect(ball).toBeDefined();
            expect(ball.Diameter).toBe(radius * 2 + 1);
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
            expect(() => { ball.Diameter = 10; }).toThrow();
            expect(() => { ball.Diameter = 9.01; }).toThrow();
        });
    });

    describe("startNewGame medthod", () => {
        test("ball max/min random location must match edges of the paddle", () => {
            const ball = new Ball(ctx, 5);
            const paddle = new Paddle(ctx, 15, 5);
            paddle.startNewGame();

            const mockMath = Object.create(global.Math);
            const gMath = global.Math;
            global.Math = mockMath;

            mockMath.random = () => 0.99999999;
            ball.startNewGame(paddle);
            expect(ball.RightX).toBe(paddle.RightX);

            mockMath.random = () => 0.00000001;
            ball.startNewGame(paddle);
            expect(ball.LeftX).toBe(paddle.LeftX);
            global.Math = gMath;
        });

        test("Start new game should draw a blue ball on top of the paddle, touching it with 1 pixel", () => {
            const canvas = createCanvas(800, 600);
            const ctx = canvas.getContext('2d');
            const g = new PongGame(ctx);
            g.startNewGame();
            const imageData = ctx.getImageData(g.Paddle.LeftX, g.Paddle.TopY - 1, g.Paddle.Width, 1);
            let numberOfNonWhitePixels = 0;
            let pixelLocation = 0;
            for (let i = 0; i < g.Paddle.Width; i++) {
                let pixel = imageData.data.slice(pixelLocation, pixelLocation + 4);
                if (pixel[3] > 0)
                    numberOfNonWhitePixels++;
                pixelLocation += 4;
            }
            expect(numberOfNonWhitePixels).toBeGreaterThan(1);
            expect(numberOfNonWhitePixels).toBeLessThan(g.Ball.Width);
        });
    });

    describe("draw method tests", () => {
    });
});
