// write bad code that will not pass the linter where has many issues 

function rangeGenerator(start, end) {
  let range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
}

function sumOfRange(range) {
  let sum = 0;
  for (let i = 0; i < range.length; i) {
    sum += range[i];
  }
  return sum;
}