const isAdmin = true;
const canWrite = true;

console.log(`System file ${isAdmin && canWrite}`);
console.log(`Basic file ${isAdmin || canWrite}`);
console.log(`Invert admin's rules ${!isAdmin}`);


// Оператор нулевого слияния

let username = '';

console.log(username || 'Default Username');
console.log(username ?? 'Default Username');

// TASK
// Пользователь хочет приобрести игру в магазине. Он может это сделать только если:
// Eго баланс больше 1000 (balance) или число бонусов больше 100 (bonusBalance)
// Он не забанен (isBanned)
// Игра не куплена (isExist)
// Игра в продаже (isSelling)
// Напишите условие для покупки и выведите в консоль результат.

const balance = 1200;
const bonusBalance = 100;
const isBanned = false;
const isExist = false;
const isSelling = true;

const canBuy = (balance > 1000 || bonusBalance > 100)
  && !isBanned
  && !isExist
  && !isSelling;

console.log(`Can buy a game: ${ canBuy ? 'Yes' : 'No'}`);
