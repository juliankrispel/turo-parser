# Turo compiler

@builtin "number.ne"
@builtin "whitespace.ne"

# statement -> linebreak? _ expression _
#  | _ expression _

statements -> statement:* {%
  function(data) {
    return data[0];
  }
%}

# statement
statement -> linebreak _ (expression | assignment) _ {%
  function(data) {
    return data[2][0];
  }
%}

assignment -> identifier _ "=" _ expression {%
  function(data) {
    return {
      type: 'assignment',
      identifier: data[0],
      right: data[4],
    };
  }
%}

# expressions
expression -> (
  multiplication
  | sum
  | power_of
  | square_root
  | parantheses
  | value
) {%
  function(data) {
    return data[0][0];
  }
%}

# parantheses
parantheses -> "(" _ expression _ ")" {%
  function (data, location, reject) {
    data[2].parens = true;
    return data[2];
  }
%}

linebreak -> "\n"

# multiplication
multiplication -> expression _ multiply _ expression {%
  function (data, location, reject) {
    const operator = data[2][0];
    return {
      type: operator === '/' ? 'division' : 'multiplication',
      location,
      operator,
      left: data[0],
      right: data[4],
    };
  }
%}

# sums
sum -> expression _ plus_minus _ expression {%
  function (data, location, reject) {
    const operator = data[2][0];
    return {
      type: operator === '+' ? 'addition' : 'substraction',
      location,
      operator,
      left: data[0],
      right: data[4],
    };
  }
%}

# pow
power_of -> expression _ pow _ expression {%
  function(data, location) {
    return {
      type: 'pow',
      location,
      left: data[0],
      right: data[4],
    };
  }
%}


# square root
square_root -> expression _ root _ expression {%
  function(data, location) {
    return {
      type: 'sqrt',
      location,
      left: data[0],
      right: data[4],
    };
  }
%}


value -> (
  number
  | identifier
) {%
  function(data) {
    return {
      type: 'value',
      content: data[0][0]
    };
  }
%}

# numbers
number -> (
  decimal
) {%
  function(data, location) {
    return {
      type: 'number',
      location,
      value: data[0][0],
    };
  }
%}

identifier -> [a-zA-Z_]:+ [a-z-A-Z0-0_]:+ {%
  function(data) {
    return {
      type: 'identifier',
      name: data[0].concat(data[1]).join(''),
    };
  }
%}

# literals
pow -> "^" | "**" | "to the power of"
multiply -> "/" | "*"
plus_minus -> "+" | "-"
root -> "√" | "sqrt"
