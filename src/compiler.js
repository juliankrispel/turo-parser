// The compiler
import nearley from 'nearley';
import parser from './parser';

const operate = (node, operation, ...args) => {
  node = compileNode(node, ...args);
  node.value = operation(node.left.value, node.right.value, ...args);
  return node;
}

const evaluateIdentifier = (node, context, lineNumber) => {
  node.value = context.getVariable(node.name, lineNumber).value;
  return node;
};

const operations = {
  addition:
    (node, ...args) => operate(node, (left, right) => left + right, ...args),
  substraction:
    (node, ...args) => operate(node, (left, right) => left - right, ...args),
  func:
    (node, ...args) => {
      node = compileNode(node, ...args);
      node.value = Math[node.operator](node.right.value);
      return node;
    },
  sqrt:
    (node, ...args) => operate(node, (left, right) => Math.sqrt(left, right), ...args),
  multiplication:
    (node, ...args) => operate(node, (left, right) => left * right, ...args),
  division:
    (node, ...args) => operate(node, (left, right) => left / right, ...args),
  pow:
    (node, ...args) => operate(node, (left, right) => Math.pow(left, right), ...args),
  value:
    (node, context, lineNumber) => {
      if (node.content.type === 'identifier') {
        return evaluateIdentifier(node.content, context, lineNumber);
      }
      return node.content;
    },
  assignment:
    (node, context, lineNumber) => {
      node = compileNode(node, context, lineNumber);

      context.setVariable(
        lineNumber,
        node.identifier.name,
        node.right.value,
      );

      node.value = node.right.value;
      return node;
    }
}

const compileNode = (node, ...args) => {
  if (node.left && !node.left.value) {
    node.left = operations[node.left.type](node.left, ...args);
  }

  if (node.right && !node.right.value) {
    node.right = operations[node.right.type](node.right, ...args);
  }

  return node;
}

const compileStatement = (node, lineNumber, context) => {
  const nodeOperation = operations[node.type];
  const statement = nodeOperation ? nodeOperation(node, context, lineNumber) : node;

  return {
    lineNumber,
    statement,
    value: statement.value,
  }
}

const initialContextState = {
  variables: []
}

class Context {
  constructor(state = initialContextState) {
    this.state = state;
  }

  setVariable = (lineNum, name, value) => {
    this.state.variables = this.state.variables
      .filter(({ lineNumber }) => lineNum !== lineNumber)
      .concat([{lineNumber: lineNum, name, value}]);
  }

  // the linNum argument lets you define the valid variable for that line
  getVariable = (varName, lineNum) => {
    let vars = this.state.variables.filter(({ name }) => {
      return name === varName;
    });
    if (lineNum) {
      vars = vars.filter(({ lineNumber }) => lineNum > lineNumber);
    }
    return vars[vars.length - 1];
  }
}

class Document {
  constructor(text) {
    const p = new nearley.Parser(parser.ParserRules, parser.ParserStart);
    this.context = new Context();

    this.lines = p.feed('\n'+text).results[0]
      .map((node, lineNumber) => compileStatement(node, lineNumber, this.context));
  }

  updateStatement(index, text) {
  }

  getStatement(index) {

  }

  getVariable = (name, lineNum) => this.context.getVariable(name, lineNum);

  toValues() {
    return this.lines.map(({ value }) => value);
  }

  getContext() {
    return this.context;
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
