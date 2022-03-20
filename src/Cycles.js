/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let number;
    let sum = 0;
    start >= end ? (number = end) : (number = start);
    for (let i = 0; i <= Math.abs(start - end); i++) {
        if (number % 2 === 0) sum += number;
        number++;
    }
    return sum;
}
/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let count = 0;
    while (a > 0.1) {
        a /= 2;
        console.log(a);
        count++;
    }
    return count;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let str = '';
    let pos = 0;
    do {
        if ((pos + 1) % 3 === 0) str = str + '_';
        else str = str + message[pos];
        pos++;
    } while (pos < message.length);
    return str;
}
