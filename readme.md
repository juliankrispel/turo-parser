## Turo parser

An attempt to rewrite the turo parser with the nearley parser generator

### Things I'm thinking about regarding the design

- Units as in turo v1 (with unit definition syntax)
- Units and Variables should be living values (Think of currencies, stock,the value of gold, a country's population, temperature of a given place, wind speed), dependent expressions should be updated when a living value changes
- Exposing an api for updating units/variables asynchronously
- The parser should be lightweight
- We should use the streaming system for suggested inputs and autocomplete
