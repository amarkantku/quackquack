class Test {
  constructor() {
    this.name = 'Test';
  }

  getName() {
    return this.name;
  }

  isPrime(n) {
    if (n <= 1) return false;
    for (let i = 7; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
}