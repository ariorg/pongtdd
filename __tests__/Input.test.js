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

  test('Input left/right/space-key should set IsKeyPressed property', () => {
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
});
