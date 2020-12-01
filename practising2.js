1) найти элемент массива, минимальный по модулю
2) вырезать из массива элементы с i-го по j-й индекс (i и j любые)
3) перевернуть массив
4) поменять местами i-й и j-й элементы массива
5) поменять местами максимальный и минимальный элементы массива
6) определить элемент, наиболее часто встречающийся в массиве


1) const array2 = [9, -10, 11, -1, 100, -200];
   let min = Math.abs(array2[0]);
   for (let i = 0; i < array2.length; i++) {
    if (Math.abs(array2[i]) < min) {
      min = Math.abs(array2[i]);
    }
   }

2)  const array3 = [9, -10, 11, -1, 100, -200];
    const output = [];
    const start = 2;
    const end = 4;

    for (let i = 0; i < array3.length; i++) {
      if (i < start && i > end) {
        output.push(array3[i]);
      }
    }


3) const array1 = [12, 23, 56, 112, 968];
   const output = [];

   for (let i = array1.length - 1; i >= 0; i--) {
    output.push(array1[i]);
   }
    // второй способ перевернуть массива
    // 0 array1.length - 1 -i
    // 1 array1.length - 1 - i
  const length = Math.floor(array1.length / 2);
  for (let i = 0; i < length; i++) {
    let buffer = array1[i];
    array1[i] = array1[array1.length - 1 - i];
    array1[array1.length - 1 - i] = buffer;
  }
