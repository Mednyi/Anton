'use strict'

// new RegExp('pattern', 'flags');
// /pattern/flags;

const ans = promt('Введите ваше имя');

const reg = /n/i;

// i - игнорирование регистра при сопоставлении
// g - глобальное сопоставление
// m - сопоставление по нескольким строкам; символы начала и конца (^ и $) начинают работать по нескольким строкам (то есть, происходит сопоставление с началом или концом каждой строки (строки разделяются символами \n или \r), а не только с началом или концом всей вводимой строки)

// \d - Сопоставляется с символом цифры в базовом латинском алфавите. Эквивалентен набору символов [0-9].
// \w - Сопоставляется с любым алфавитно-цифровым символом из базового латинского алфавита, включая символ подчёркивания. Эквивалентен набору символов [A-Za-z0-9_].
// \s - Сопоставляется с одиночным пробельным символом, который включает в себя пробел, табуляцию, подачу страницы, перевод строки и другие пробельные символы Юникода. Эквивалентен набору символов [ \f\n\r\t\v​\u00a0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​\u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​​\u202f\u205f​\u3000]. Например, шаблон /\s\w*/ сопоставляется с подстрокой « bar» в строке «foo bar».

// console.log(ans.search(reg));
// console.log(ans.match(reg));

const pass = promt('Password');

console.log(pass.replace(/./g, '*'));
console.log(pass.replace(/\./g, '*'));

console.log('12-34-56'.replace(/-/g, ':'));