import compile from '../compiler'

describe('compiler', () => {
  it('compiles simple sums', () => {
    const text = `3.21 + 321
    521 + 321`
    const values = compile(text).toValues();
    expect(values[0]).toEqual(324.21);
    expect(values[1]).toEqual(842);
  });

  it('compiles square root', () => {
    const text = `4 √ 2`;
    const values = compile(text).toValues();
    expect(values[0]).toEqual(2);
  });

  it('compiles multiplication and division', () => {
    const text = `5 * 2
    10 / 2`;
    const values = compile(text).toValues();
    expect(values[0]).toEqual(10);
    expect(values[1]).toEqual(5);
  });

  describe('assignment', () => {
    describe('definitions', () => {
      const text = `sum = 3 + 2`;
      it('compiles assignments', () => {
        const values = compile(text).toValues();
        expect(values[0]).toEqual(5);
      })

      it('sets assignments on context', () => {
        const doc = compile(text);
        const sumVar = doc.getVariable('sum');
        expect(sumVar.name).toEqual('sum');
        expect(sumVar.value).toEqual(5);
      })
    });

    describe('usage', () => {
      it('compiles expressions with identifiers in them', () => {
        const text = `sum = 3 + 2
        sum * 2`;
        const values = compile(text).toValues();
        expect(values[0]).toEqual(5);
        expect(values[1]).toEqual(10);
      });

      it('evaluates expressions in combination reassignments in sequence', () => {
        const text = `sum = 1 + 2
        sum = sum + 2
        sum = sum * 2`
        const values = compile(text).toValues();
        expect(values[0]).toEqual(3);
        expect(values[1]).toEqual(5);
        expect(values[2]).toEqual(10);
      });
    });
  });
});
