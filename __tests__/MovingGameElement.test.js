import MovingGameElement from "../js/MovingGameElement.js";

describe("MovingGameElement class tests", () => {

    describe("Constructor", () => {
        it("Should create MogingGameElement with zero X/Ydirection", () => {
            const ctx = document.createElement("canvas").getContext("2d");
            let mge = new MovingGameElement(ctx);
            expect(mge.XDirection).toBe(0);
            expect(mge.YDirection).toBe(0);
            expect(mge.Speed).toBe(0);
        });
    });

    describe("Setters and getters", () => {
        const ctx = document.createElement("canvas").getContext("2d");
        let mge = new MovingGameElement(ctx);

        test("set Speed should set Speed", () => {
            mge.Speed = 0;
            expect(mge.Speed).toBe(0);
            mge.Speed = 123;
            expect(mge.Speed).toBe(123);
        });
            
        test("Set X/Ydirection should throw if not a valid direction", () => {
            expect(() => { mge.YDirection = 0; }).not.toThrow();
            expect(() => { mge.XDirection = -1; }).not.toThrow();
            
            expect(() => { mge.YDirection = -2; }).toThrow();
            expect(() => { mge.XDirection = 10; }).toThrow();
        });
        
    });
});
