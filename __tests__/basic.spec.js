import nearley from 'nearley';
import turo from '../dist/turo';

const p = new nearley.Parser(turo.ParserRules, turo.ParserStart);

describe('basic operations', () => {
  it('does sums', () => {
    console.log(JSON.stringify(p.feed('(1 + 3) + 1').results, null, 2));
    console.log(JSON.stringify(p.feed('1 - 1').results, null, 2));
    console.log(JSON.stringify(p.feed('1.321 - 1123213.21').results, null, 2));
  });

  it('does square root', () => {
    console.log(JSON.stringify(p.feed('(1 * 3) √ 3 ^ 3').results, null, 2));
  });

  it('does division and multiplication', () => {
    console.log(JSON.stringify(p.feed('10000 / 1').results, null, 2));
    console.log(JSON.stringify(p.feed('1 * 1').results, null, 2));
    console.log(JSON.stringify(p.feed('9 * 231.32132').results, null, 2));
  });

  it('does power of', () => {
    console.log(JSON.stringify(p.feed('100.3003 ** 1').results, null, 2));
    console.log(JSON.stringify(p.feed('13 ^ 1321').results, null, 2));
  });

  it('does power of', () => {
    console.log(JSON.stringify(p.feed('(123 * 0.1) ^ 3 + (0.1 - 32)').results, null, 2));
  });

  fit('parses lines', () => {
    const text = `1 + 321
32 ^ 321`;

    console.log(text);
    console.log(JSON.stringify(p.feed(text).results, null, 2));
  });
});
