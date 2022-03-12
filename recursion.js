// Попробуйте разделить число на 2.
// Если число делится без остатка, то это наименьший делитель.
// Если нет, то попробуйте следующий делитель.
// Если ничего не делит число без остатка, то переданное число
// является простым, так что его наименьший делитель — оно само (не считая 1)

const smallestDivisor = (num) => {
  // BEGIN (write your solution here)
  const iter = (counter, acc) => {
    if ((counter % acc) == 0) {
      return acc;
    }
    else if (counter == 1) return counter;
    return iter(counter, acc + 1);
  }
  return iter(num, 2);
  // END
};