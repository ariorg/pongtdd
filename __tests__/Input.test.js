import Input from '../js/Input.js';

describe('constructor', () => {
  test('Input creation', () => {
    const input = new Input();
    expect(input).toBeDefined();
    expect(input.IsLeftKeyPressed).toBeFalsy();
    expect(input.IsRightKeyPressed).toBeFalsy();
    expect(input.IsSpaceKeyPressed).toBeFalsy();
  });

  test('Input creation should add event handlers to document', () => {
    let spyOnAddEventListener = jest.spyOn(document, 'addEventListener');
    const input = new Input();
    expect(spyOnAddEventListener).toHaveBeenCalledTimes(2);
  });

  test('Left/right/space-keydown should set IsKeyPressed property', () => {
    const input = new Input();

    const eventLeftKey = new KeyboardEvent('keydown', { keyCode: 37 });
    const eventRightKey = new KeyboardEvent('keydown', { keyCode: 39 });
    const eventSpaceKey = new KeyboardEvent('keydown', { keyCode: 32 });

    expect(input.IsLeftKeyPressed).toBeFalsy();
    expect(input.IsRightKeyPressed).toBeFalsy();
    expect(input.IsSpaceKeyPressed).toBeFalsy();

    document.dispatchEvent(eventLeftKey);
    expect(input.IsLeftKeyPressed).toBeTruthy();

    document.dispatchEvent(eventRightKey);
    expect(input.IsRightKeyPressed).toBeTruthy();

    document.dispatchEvent(eventSpaceKey);
    expect(input.IsSpaceKeyPressed).toBeTruthy();
  });

  test('Left/right/space-keyup should unset IsKeyPressed property', () => {
    const input = new Input();

    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 37 }));
    expect(input.IsLeftKeyPressed).toBeTruthy();
    document.dispatchEvent(new KeyboardEvent('keyup', { keyCode: 37 }));
    expect(input.IsLeftKeyPressed).toBeFalsy();

    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 39 }));
    expect(input.IsRightKeyPressed).toBeTruthy();
    document.dispatchEvent(new KeyboardEvent('keyup', { keyCode: 39 }));
    expect(input.IsRightKeyPressed).toBeFalsy();

    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 32 }));
    expect(input.IsSpaceKeyPressed).toBeTruthy();
    document.dispatchEvent(new KeyboardEvent('keyup', { keyCode: 32 }));
    expect(input.IsSpaceKeyPressed).toBeFalsy();
  });
});
