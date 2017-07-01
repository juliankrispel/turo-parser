# Turo compiler

@builtin "number.ne"
@builtin "whitespace.ne"

# statement -> linebreak? _ expression _
#  | _ expression _


# expressions
expression ->
  multiplication
  | sum
  | power_of
  | square_root
  | parantheses
  | number

# parantheses
parantheses -> "(" _ expression _ ")" {%
  function (data, location, reject) {
    // simply return the expression
    data[2][0].parens = true;
    return data[2][0];
  }
%}

linebreak -> "\n"

# multiplication
multiplication -> expression _ multiply _ expression {%
  function (data, location, reject) {
    return {
      type: 'multiplication',
      location,
      operator: data[2][0],
      left: data[0],
      right: data[4],
    };
  }
%}

# sums
sum -> expression _ plus_minus _ expression {%
  function (data, location, reject) {
    return {
      type: 'sum',
      location,
      operator: data[2][0],
      left: data[0],
      right: data[4],
    };
  }
%}

# pow
power_of -> expression _ pow _ expression {%
  function(data, location) {
    return {
      type: 'power_of',
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
      type: 'square_root',
      location,
      left: data[0],
      right: data[4],
    };
  }
%}


# numbers
number -> decimal
  | percentage 


# units and variables


# literals
pow -> "^" | "**"
multiply -> "/" | "*"
plus_minus -> "+" | "-"
root -> "√"
