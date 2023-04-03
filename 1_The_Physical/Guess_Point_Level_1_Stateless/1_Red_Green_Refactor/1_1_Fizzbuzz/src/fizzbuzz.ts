const fizzbuzz = (numbers: number[]) => {
  return numbers.reduce((acc, num) => {
    let result = ''
    if (num % 3 === 0) result += 'fizz';
    if (num % 5 === 0) result += 'buzz';
    if (!result) return acc + num;
    return acc + result;
  }, '');
}

export {
  fizzbuzz,
}

