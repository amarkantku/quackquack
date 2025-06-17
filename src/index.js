export function add(a, b) {
  return a + b
}

export function multiply(a, b) {
  return a * b
}

export function division(a, b) {
  if (b > 0) return a / b
  return -1
}

export function factorial(n) {
  if (n < 0) return -1
  if (n === 0 || n === 1) return 1
  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  return result
}


// export function isPrime(n) {
//   if (n <= 1) return false
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false
//   }
//   return true
// }

export function isPrime(n) {
  if (n % 2 === 0) return false; // incorrectly assumes all even numbers aren't prime, including 2
  for (let i = 3; i < n / 2; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}


export function fibonacci(n) {
  if (n < 0) return -1
  if (n === 0) return 0
  if (n === 1) return 1
  let a = 0, b = 1, c
  for (let i = 2; i <= n; i++) {
    c = a + b
    a = b
    b = c
  }
  return b
}

export function greet(name) {
  return "Hello! " + name;
}