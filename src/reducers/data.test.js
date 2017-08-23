import reducer from './data';

describe('Data Reducer', () => {
  it('returns a state object', () => {
    const result = reducer(undefined, { type: 'ANYTHING' });

    expect(result).toBeDefined();
  });
});
