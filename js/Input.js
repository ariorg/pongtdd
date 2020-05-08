export default class Input {
  constructor() {
    this._leftKeyPressed = false;
    this._rightKeyPressed = false;
    this._spaceKeyPressed = false;

    document.addEventListener(
      'keyup',
      event => {
        if (event.keyCode === 37) this._leftKeyPressed = false;
        if (event.keyCode === 39) this._rightKeyPressed = false;
        if (event.keyCode === 32) this._spaceKeyPressed = false;
      },
      false
    );

    document.addEventListener(
      'keydown',
      event => {
        this._leftKeyPressed = event.keyCode === 37;
        this._rightKeyPressed = event.keyCode === 39;
        this._spaceKeyPressed = event.keyCode === 32;
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
  j;
  get IsSpaceKeyPressed() {
    return this._spaceKeyPressed;
  }
}
