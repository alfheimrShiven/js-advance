function isPrime(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= number/2; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  self.onmessage = function (event) {
    const start = event.data.start;
    const end = event.data.end;
  
    const primes = [];
  
    for (let number = start; number <= end; number++) {
      if (isPrime(number)) {
        primes.push(number);
      }
    }
  
    self.postMessage(primes);
  };
  