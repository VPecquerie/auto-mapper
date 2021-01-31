import { fromValue } from '@automapper/core';
import { MapFnClassId, TransformationType } from '@automapper/types';

describe('FromValueFunction', () => {
  it('should return correctly', () => {
    const fromValueFunction = fromValue(10);
    expect(fromValueFunction).toBeTruthy();
    expect(fromValueFunction[MapFnClassId.type]).toEqual(
      TransformationType.FromValue
    );
    expect(fromValueFunction[MapFnClassId.fn]).toBeInstanceOf(Function);
  });

  it('should map correctly', () => {
    const fromValueFunction = fromValue(10);
    const result = fromValueFunction[MapFnClassId.fn]();
    expect(result).toEqual(10);
  });
});
