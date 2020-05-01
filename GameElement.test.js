import GameElement from "./GameElement";

describe("GameElement class tests", () => {

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext('2d');

    describe("Constructor", () => {
        test("Element creation without parameters should set x,y to 0, and width and height equal to 1", () => {
            const ge = new GameElement();
            expect([ge.X, ge.Y, ge.Width, ge.Height]).toStrictEqual([0, 0, 1, 1]);
        });

        test("Element creation with constructor parameters should set X,Y,Width and Height properties", () => {
            const ge = new GameElement(ctx, 29, 9);
            expect([ge.X, ge.Y, ge.Width, ge.Height]).toStrictEqual([0, 0, 29, 9]);
        });

        test("Element creation with no size parameters should set Width and Height to 1", () => {
            const ge = new GameElement(ctx);
            expect(ge.Width).toBe(1);
            expect(ge.Height).toBe(1);
        });

        test("GameElement should not accept size that is not odd integer", () => {
            expect(() => { new GameElement(ctx, 10, 7) }).toThrow();
            expect(() => { new GameElement(ctx, 19, 12) }).toThrow();
            expect(() => { new GameElement(ctx, 19.5, 11.01) }).toThrow();
            expect(() => { new GameElement(ctx, 19, 11) }).not.toThrow();
        });
    });

    describe("Getters and setters", () => {
        test("Setters should set their propperties", () => {
            const ge = new GameElement();
            ge.X = 101;
            ge.Y = 102;
            ge.Width = 201;
            ge.Height = 203;
            expect([ge.X, ge.Y, ge.Width, ge.Height]).toStrictEqual([101, 102, 201, 203]);
        });

        test("Set LeftX/RightX should change X", () => {
            const ge = new GameElement();
            expect(ge.X).toBe(0);

            const widthRadius = 7;
            ge.Width = 2 * widthRadius + 1;

            ge.XRight = 100;
            expect(ge.X).toBe(100-widthRadius);

            ge.XLeft = 100;
            expect(ge.X).toBe(100+widthRadius);
        });

        test("Set BottomY should change Y", () => {
            const ge = new GameElement();
            expect(ge.Y).toBe(0);

            const heightRadius = 4;
            
            ge.Height = 2 * heightRadius + 1;

            ge.YTop = 100;
            expect(ge.Y).toBe(100+heightRadius);
            
            ge.YBottom = 100;
            expect(ge.Y).toBe(100-heightRadius);
        });

    });

    test("startNewGame method should set coords and shape size to 1", () => {
        const ge = new GameElement();
        ge.X = ge.Y = ge.Width = ge.Height = 5;
        expect(ge.X + ge.Y + ge.Width + ge.Height).toBe(4 * 5);
        ge.startNewGame();
        expect([ge.X, ge.Y, ge.Width, ge.Height]).toStrictEqual([0, 0, 1, 1]);
    });

    test("Setting width and height should set WidthRadius and HeighRadius", () => {
        const ge = new GameElement(ctx, 11, 23);
        expect(ge.WidthRadius).toBe(5);
        expect(ge.HeightRadius).toBe(11);
    });

    test("Width/Height should be equal to 2 x radius + 1 (the center point)", () => {
        const ge = new GameElement(ctx);
        ge.Width = 31;
        ge.Height = 11;
        expect(ge.WidthRadius).toBe(15);
        expect(ge.HeightRadius).toBe(5);
    });

    test("GameElement should have TopLeft and BottomRight coordinates", () => {
        const ge = new GameElement(ctx, 41, 21);
        ge.X = 100;
        ge.Y = 200;
        expect(ge.XLeft).toBe(80);
        expect(ge.YTop).toBe(190);
        expect(ge.XRight).toBe(120);
        expect(ge.YBottom).toBe(210);
    });

    test("GameElement.update is abstract method and should throw", () => {
        const ge = new GameElement(ctx);
        expect(() => { ge.update() }).toThrow();
    });

    test("moveTo should set X and Y coordinates", () => {
        const ge = new GameElement(ctx);
        ge.X = ge.Y = 0;
        ge.moveTo(123, 321);
        expect(ge.X).toBe(123);
        expect(ge.Y).toBe(321);
    });
});