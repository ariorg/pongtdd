export default class Input {
  constructor() {
    this._leftKeyPressed = false;
    this._rightKeyPressed = false;
    this._spaceKeyPressed = false;

    document.addEventListener(
      'keyup',
      /* istanbul ignore next */
      event => {
        if (event.keyCode === 37) this._leftKeyPressed = false
        if (event.keyCode === 39) this._rightKeyPressed = false
      },
      false
    )

    document.addEventListener(
      'keydown',
      /* istanbul ignore next */
      event => {
        this._leftKeyPressed = event.keyCode === 37
        this._rightKeyPressed = event.keyCode === 39
        this._rightKeyPressed = event.keyCode === 32
      },
      false
    )
  }

  get IsLeftKeyPressed() {
    return this._leftKeyPressed
  }

  get IsRightKeyPressed() {
    return this._rightKeyPressed
  }
    j
  get IsSpaceKeyPressed() {
    return this._spaceKeyPressed
  }
}
