// Task 1

let days = 9 // Дней в периоде
let evenDayAmount = 200 // Количество протеина в чётные дни
let oddDayAmount = 100 // Количество протеина в нечётные дни
let total = 0 // Общее количество протеина

// for (let i = 0; i < days; i++) {
//   if (days % 2 === 0) {
//     total += evenDayAmount;
//     } else {
//       total += oddDayAmount;
//       }
//       console.log(total)
// }

for (let today = 1; today <= days; today++) {
  if (today % 2 === 0) {
    console.log('Take ' + evenDayAmount + ' gram')
    console.log((total += evenDayAmount))
  } else {
    console.log('Take ' + evenDayAmount + ' gram')
    console.log((total += oddDayAmount))
  }
}
/* Техническое задание

Мяу! Программа должна считать сколько протеина я должен выпить за весь тренировочный период.

В чётные дни я пью 200 грамм. В нечётные 100 грамм.

Количество дней хранится в переменной days, количество протеина для приёма в чётный день — в переменной evenDayAmount, протеин в нечётный день — в переменной oddDayAmount, а результат необходимо записать в переменную total, которая уже задана.

*/

// Task 2

let days1 = 0
let initialWeight = 6000 // Исходный вес в граммах
let targetWeight = 5000 // Желанный вес в граммах
let persent = 0

// while (targetWeight <= initialWeight) {
//   if (initialWeight === 5000) {
//     break;
//     }
//     initialWeight -= Math.round(initialWeight - initialWeight * 0.95);
//     days++;
//     }

while (targetWeight <= initialWeight) {
  if (initialWeight === 5000) {
    break
  }

  persent = Math.round(initialWeight * 0.05)
  initialWeight -= persent

  days1++
}
/* Техническое задание

Мяу! Меня утомляют диета и тренировки, поэтому я хочу узнать, сколько ещё дней осталось заниматься, чтобы добиться нужного веса к мероприятию.

Входные данные: вес в начале и вес в конце.

Логика работы: если я тренируюсь и сижу на диете, то теряю 5% своей массы в день (на сухом корме не особо пожируешь, а тренировки суровые).

Просто посчитай, сколько дней понадобится провести в таком режиме и запиши количество в переменную days.

*/
