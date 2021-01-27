Number.isInteger(10); // Is number in (Z - integers) enum; will return true for 10;
Number.parseFloat('10.5'); // will parse String as Float number
Number.parseInt('100'); // will parse String as Integer
//
Number.prototype.toFixed(10); // format number to contain only 10 fraction digits.
Number.prototype.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' }); // will return localized number with currency character at the end
Number.prototype.toString(); // will convert Number to String

// String
String.length // is the length of string
String.prototype.includes('string') // returns true if string includes substring passed as argument
String.prototype.indexOf('string') // finds index of first occurrence of substring in string
String.prototype.lastIndexOf('string') // finds index of last occurrence of substring in string
