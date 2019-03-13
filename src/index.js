module.exports = function getZerosCount(number, base) {
  // your implementation

  function getPrimes(number) {

  	let primeFactorials = {},
  	rest = number,
  	factorial = 2,
  	prime = true;

  	while (rest != 1) {
  		
  		for (let i = 2; i < factorial; i++) {
  			if (factorial % i == 0) {
  				prime = false;
  				break;
  			}
  		}


  		while (prime && (rest % factorial == 0)) {
  			rest /= factorial;
  			if (primeFactorials[factorial]) {
  				primeFactorials[factorial]++;
  			} else {
  				primeFactorials[factorial] = 1;
  			}
  		}

  		factorial++;
  		prime = true;

  	}

  	return primeFactorials

  }

  function countPrimesInNumber(primes, number) {

  	let counts = [];

  	for (key in primes) {
  		let prime = parseInt(key),
  				power = 1,
  				trunc = Math.trunc(number / prime**power),
  				counter = 0;

  		while (trunc) {
  			counter += trunc;
  			power++;
  			trunc = Math.trunc(number / prime**power)
  		}

  		counts.push(Math.floor(counter / primes[key]))
  		
  	}	

  	return counts

  }

  let counts = countPrimesInNumber(getPrimes(base), number)

  return Math.min.apply(null, counts);

}