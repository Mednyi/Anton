// Реализуйте функцию getLetter(), которая извлекает из переданной строки
// указанный символ (по порядковому номеру, а не индексу) и возвращает его наружу.
// Если такого символа нет, то функция возвращает пустую строку.

const getLetter = (text, position) => text[position - 1] || '';




// Напишем функцию getTypeOfSentence(), которая анализирует текст и возвращает описание его тона: для обычных предложений – General sentence, для вопросительных – Question sentence.

const getTypeOfSentence = (sentence) => {
  // Объявляем переменную, в которую запишем тип предложения
  let sentenceType;
  // Предикат, проверяющий окончание текста
  // Если он оканчивается на символ '?', то вернётся true,
  // иначе false
  if (sentence.endsWith('?')) {
    // Если условие выше сработало,
    // то это вопросительное предложение.
    // Присваиваем sentenceType соответствующее значение.
    sentenceType = 'Question';
  } else {
    // Во всех остальных случаях предложение — обычное
    sentenceType = 'General';
  }

  // С помощью интерполяции формируем строку
  return `${sentenceType} sentence`;
};


// Реализуйте функцию convertText(), которая принимает на вход строку и, если первая буква не заглавная, возвращает перевернутый вариант исходной строки. Если первая буква заглавная, то строка возвращается без изменений. Если на вход передана пустая строка, функция должна вернуть пустую строку.

const convertText = (text) => {
  if (text === '') {
    return '';
  }

  const reversable = text[0] !== text[0].toUpperCase();
  return reversable ? (text.split('').reverse().join('')) : text;
};

const convertText2 = (text) => {
  if (text === '') {
    return '';
  } else if (text[0] !== text[0].toUpperCase()) {
    return text.split('').reverse().join('');
  } else {
    return text;
  }
};


