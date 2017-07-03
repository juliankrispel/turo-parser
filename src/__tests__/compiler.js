import compile from '../compiler'

describe('compiler', () => {
  it('should work', () => {
    const text = `3.21 + 321
    521 + 321`
    console.log(compile(text).getAst());
  });
});
