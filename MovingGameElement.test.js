import MovingGameElement from "./MovingGameElement.js";

describe("MovingGameElement class tests", () => {

    describe("constructor", () => {
        it("should create MogingGameElement with zero X/Ydirection", () => {
            const ctx = document.createElement("canvas").getContext("2d");
            let mge = new MovingGameElement(ctx);
            expect(mge.XDirection).toBe(0);
            expect(mge.YDirection).toBe(0);
        });
    });

    describe("setters and getters", () => {
        test("set X/Ydirection should throw if not a valid direction", () => {
            const ctx = document.createElement("canvas").getContext("2d");
            let mge = new MovingGameElement(ctx);

            expect(() => { mge.YDirection = 0; }).not.toThrow();
            expect(() => { mge.XDirection = -1; }).not.toThrow();
            
            expect(() => { mge.YDirection = -2; }).toThrow();
            expect(() => { mge.XDirection = 10; }).toThrow();
        });
    });
});