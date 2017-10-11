import reducer from './reducer';

describe('Data Reducer', () => {
  it('returns a state object', () => {
    const result = reducer(undefined, { type: 'ANYTHING' });

    expect(result).toBeDefined();
  });
});
