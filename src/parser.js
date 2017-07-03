// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": 
        function(d) {
            return parseInt(d[0].join(""));
        }
        },
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "int$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": 
        function(d) {
            if (d[0]) {
                return parseInt(d[0][0]+d[1].join(""));
            } else {
                return parseInt(d[1].join(""));
            }
        }
        },
    {"name": "unsigned_decimal$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$1", "symbols": ["unsigned_decimal$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1", "symbols": [{"literal":"."}, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "unsigned_decimal$ebnf$2", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "unsigned_decimal$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "unsigned_decimal", "symbols": ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"], "postprocess": 
        function(d) {
            return parseFloat(
                d[0].join("") +
                (d[1] ? "."+d[1][1].join("") : "")
            );
        }
        },
    {"name": "decimal$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "decimal$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$2", "symbols": ["decimal$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "decimal$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "decimal$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "")
            );
        }
        },
    {"name": "percentage", "symbols": ["decimal", {"literal":"%"}], "postprocess": 
        function(d) {
            return d[0]/100;
        }
        },
    {"name": "jsonfloat$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$2", "symbols": ["jsonfloat$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"]},
    {"name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "") +
                (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : "")
            );
        }
        },
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "statements$ebnf$1", "symbols": []},
    {"name": "statements$ebnf$1", "symbols": ["statements$ebnf$1", "statement"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "statements", "symbols": ["statements$ebnf$1"], "postprocess": 
        function(data) {
          return data[0];
        }
        },
    {"name": "statement$subexpression$1", "symbols": ["expression"]},
    {"name": "statement$subexpression$1", "symbols": ["assignment"]},
    {"name": "statement", "symbols": ["linebreak", "_", "statement$subexpression$1", "_"], "postprocess": 
        function(data) {
          return data[2][0];
        }
        },
    {"name": "assignment", "symbols": ["identifier", "_", {"literal":"="}, "_", "expression"], "postprocess": 
        function(data) {
          return {
            type: 'assignment',
            identifier: data[0],
            right: data[4],
          };
        }
        },
    {"name": "expression$subexpression$1", "symbols": ["multiplication"]},
    {"name": "expression$subexpression$1", "symbols": ["function"]},
    {"name": "expression$subexpression$1", "symbols": ["sum"]},
    {"name": "expression$subexpression$1", "symbols": ["power_of"]},
    {"name": "expression$subexpression$1", "symbols": ["square_root"]},
    {"name": "expression$subexpression$1", "symbols": ["parantheses"]},
    {"name": "expression$subexpression$1", "symbols": ["value"]},
    {"name": "expression$subexpression$1", "symbols": ["unit_value"]},
    {"name": "expression", "symbols": ["expression$subexpression$1"], "postprocess": 
        function(data) {
          return data[0][0];
        }
        },
    {"name": "function", "symbols": ["function_name", "_", {"literal":"("}, "_", "expression", "_", {"literal":")"}], "postprocess": 
        function(data) {
          return {
            type: 'func',
            operator: data[0][0],
            right: data[4],
          };
        }
        },
    {"name": "parantheses", "symbols": [{"literal":"("}, "_", "expression", "_", {"literal":")"}], "postprocess": 
        function (data, location, reject) {
          data[2].parens = true;
          return data[2];
        }
        },
    {"name": "linebreak", "symbols": [{"literal":"\n"}]},
    {"name": "multiplication", "symbols": ["expression", "_", "multiply", "_", "expression"], "postprocess": 
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
        },
    {"name": "sum", "symbols": ["expression", "_", "plus_minus", "_", "expression"], "postprocess": 
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
        },
    {"name": "power_of", "symbols": ["expression", "_", "pow", "_", "expression"], "postprocess": 
        function(data, location) {
          return {
            type: 'pow',
            location,
            left: data[0],
            right: data[4],
          };
        }
        },
    {"name": "square_root", "symbols": ["expression", "_", "root", "_", "expression"], "postprocess": 
        function(data, location) {
          return {
            type: 'sqrt',
            location,
            left: data[0],
            right: data[4],
          };
        }
        },
    {"name": "unit_value$subexpression$1", "symbols": ["value", "_", "unit"]},
    {"name": "unit_value", "symbols": ["unit_value$subexpression$1"], "postprocess": 
        function(data) {
          return {
            type: 'unitvalue',
            unit: data[3],
            content: data[0]
          };
        }
        },
    {"name": "value$subexpression$1", "symbols": ["number"]},
    {"name": "value$subexpression$1", "symbols": ["identifier"]},
    {"name": "value", "symbols": ["value$subexpression$1"], "postprocess": 
        function(data) {
          return {
            type: 'value',
            content: data[0][0]
          };
        }
        },
    {"name": "number$subexpression$1", "symbols": ["decimal"]},
    {"name": "number", "symbols": ["number$subexpression$1"], "postprocess": 
        function(data, location) {
          return {
            type: 'number',
            location,
            value: data[0][0],
          };
        }
        },
    {"name": "identifier$ebnf$1", "symbols": [/[a-zA-Z_]/]},
    {"name": "identifier$ebnf$1", "symbols": ["identifier$ebnf$1", /[a-zA-Z_]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "identifier$ebnf$2", "symbols": [/[a-z-A-Z0-0_]/]},
    {"name": "identifier$ebnf$2", "symbols": ["identifier$ebnf$2", /[a-z-A-Z0-0_]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "identifier", "symbols": ["identifier$ebnf$1", "identifier$ebnf$2"], "postprocess": 
        function(data) {
          return {
            type: 'identifier',
            name: data[0].concat(data[1]).join(''),
          };
        }
        },
    {"name": "unit$ebnf$1", "symbols": [/[a-zA-Z_]/]},
    {"name": "unit$ebnf$1", "symbols": ["unit$ebnf$1", /[a-zA-Z_]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unit$ebnf$2", "symbols": [/[a-z-A-Z0-0_]/]},
    {"name": "unit$ebnf$2", "symbols": ["unit$ebnf$2", /[a-z-A-Z0-0_]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unit", "symbols": ["unit$ebnf$1", "unit$ebnf$2"], "postprocess": 
        function(data) {
          return {
            type: 'unit',
            name: data[0].concat(data[1]).join(''),
          };
        }
        },
    {"name": "function_name$string$1", "symbols": [{"literal":"s"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function_name", "symbols": ["function_name$string$1"]},
    {"name": "function_name$string$2", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function_name", "symbols": ["function_name$string$2"]},
    {"name": "function_name$string$3", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function_name", "symbols": ["function_name$string$3"]},
    {"name": "function_name$string$4", "symbols": [{"literal":"a"}, {"literal":"b"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function_name", "symbols": ["function_name$string$4"]},
    {"name": "function_name$string$5", "symbols": [{"literal":"a"}, {"literal":"c"}, {"literal":"o"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function_name", "symbols": ["function_name$string$5"]},
    {"name": "function_name$string$6", "symbols": [{"literal":"a"}, {"literal":"s"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function_name", "symbols": ["function_name$string$6"]},
    {"name": "function_name$string$7", "symbols": [{"literal":"a"}, {"literal":"s"}, {"literal":"i"}, {"literal":"n"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function_name", "symbols": ["function_name$string$7"]},
    {"name": "function_name$string$8", "symbols": [{"literal":"a"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function_name", "symbols": ["function_name$string$8"]},
    {"name": "function_name$string$9", "symbols": [{"literal":"a"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function_name", "symbols": ["function_name$string$9"]},
    {"name": "function_name$string$10", "symbols": [{"literal":"a"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"2"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function_name", "symbols": ["function_name$string$10"]},
    {"name": "function_name$string$11", "symbols": [{"literal":"e"}, {"literal":"x"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function_name", "symbols": ["function_name$string$11"]},
    {"name": "function_name$string$12", "symbols": [{"literal":"e"}, {"literal":"x"}, {"literal":"p"}, {"literal":"m"}, {"literal":"1"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function_name", "symbols": ["function_name$string$12"]},
    {"name": "function_name$string$13", "symbols": [{"literal":"c"}, {"literal":"e"}, {"literal":"i"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function_name", "symbols": ["function_name$string$13"]},
    {"name": "function_name$string$14", "symbols": [{"literal":"f"}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function_name", "symbols": ["function_name$string$14"]},
    {"name": "function_name$string$15", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function_name", "symbols": ["function_name$string$15"]},
    {"name": "function_name$string$16", "symbols": [{"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function_name", "symbols": ["function_name$string$16"]},
    {"name": "function_name$string$17", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function_name", "symbols": ["function_name$string$17"]},
    {"name": "function_name$string$18", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function_name", "symbols": ["function_name$string$18"]},
    {"name": "pow", "symbols": [{"literal":"^"}]},
    {"name": "pow$string$1", "symbols": [{"literal":"*"}, {"literal":"*"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "pow", "symbols": ["pow$string$1"]},
    {"name": "pow$string$2", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"p"}, {"literal":"o"}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "pow", "symbols": ["pow$string$2"]},
    {"name": "multiply", "symbols": [{"literal":"/"}]},
    {"name": "multiply", "symbols": [{"literal":"*"}]},
    {"name": "plus_minus", "symbols": [{"literal":"+"}]},
    {"name": "plus_minus", "symbols": [{"literal":"-"}]},
    {"name": "root", "symbols": [{"literal":"√"}]},
    {"name": "root$string$1", "symbols": [{"literal":"s"}, {"literal":"q"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "root", "symbols": ["root$string$1"]}
]
  , ParserStart: "statements"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
