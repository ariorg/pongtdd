export default class Input {
    constructor() {
        this._leftKeyPressed = false;
        this._rightKeyPressed = false;

        document.addEventListener(
            "keyup",
            event => {
                if (event.keyCode === 37) this._leftKeyPressed = false;
                if (event.keyCode === 39) this._rightKeyPressed = false;
            },
            false
        );

        document.addEventListener(
            "keydown",
            event => {
                this._leftKeyPressed = event.keyCode === 37;
                this._rightKeyPressed = event.keyCode === 39;
                if (event.keyCode === 32)
                    isGameOver ? startNewGame() : (isPaused = !isPaused);
            },
            false
        );
    }

    get IsLeftKeyPressed() {
        return this._leftKeyPressed;
    }

    get IsRightKeyPressed() {
        return this._rightKeyPressed;
    }
}
