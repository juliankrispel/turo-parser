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
    });

    describe('reassignments', () => {
      const text = `sum = 1 + 2
      sum = sum + 2
      sum = sum * 2`

      it('evaluates expressions in combination reassignments in sequence', () => {
        const values = compile(text).toValues();
        expect(values[0]).toEqual(3);
        expect(values[1]).toEqual(5);
        expect(values[2]).toEqual(10);
      });

      it('gives me undefined if the variable I\'m getting doesn\'t exist', () => {
        const doc = compile(text);
        expect(doc.getVariable('boom')).toBe(undefined);
      });

      it('lets you get correct variable values per line', () => {
        const doc = compile(text);
        expect(doc.getVariable('sum', 1)).toEqual({ lineNumber: 0, name: 'sum', value: 3 });
        expect(doc.getVariable('sum', 2)).toEqual({ lineNumber: 1, name: 'sum', value: 5 });
        expect(doc.getVariable('sum', 3)).toEqual({ lineNumber: 2, name: 'sum', value: 10 });
      });
    });
  });

  describe('math functions', () => {
    const functions = ["sin", "cos", "cosh", "abs", "acos", "asin", "asinh", "atan", "atanh", "atan2", "exp", "expm1", "ceil", "floor", "log", "round", "tan", "tanh"];

    functions.forEach(func => {
      it(`compiles the ${func} math function`, () => {
        const text = `${func}(3 * 12 + 3)`;
        const value = compile(text).toValues()[0];
        expect(value).toEqual(Math[func](3 * 2 + 3));
      });
    })
  });
});
