// The compiler
import nearley from 'nearley';
import parser from './parser';
import get from 'lodash/get';

const operations = {
  sum: () => {

  }
}

class Document {
  constructor(text) {
    const p = new nearley.Parser(parser.ParserRules, parser.ParserStart);
    this.lines = p.feed('\n'+text).results[0];
    
    /* visit the ast
    .map({ type, left, right } => {
      const result = 
      if (get(left, 'type')) {

      }
      if (stateme)
      });
      */
  }

  updateStatement(index, text) {
  }

  getStatement(index) {

  }

  getAst() {
    return this.lines;
  }

  toString() {

  }
}

const compile = (text) => {
  return new Document(text);
}

export default compile;
