module.exports = function getZerosCount(number, base) {
  // your implementation

  function getPrimes(number) {

  	let primefactors = {},
      	rest = number,
      	factor = 2,
      	prime = true;

  	while (rest != 1) {
  		
  		for (let i = 2; i < factor; i++) {
  			if (factor % i == 0) {
  				prime = false;
  				break;
  			}
  		}


  		while (prime && (rest % factor == 0)) {
  			rest /= factor;
  			if (primefactors[factor]) {
  				primefactors[factor]++;
  			} else {
  				primefactors[factor] = 1;
  			}
  		}

  		factor++;
  		prime = true;

  	}

  	return primefactors

  }

  function countPrimesInNumber(primes, number) {

  	let counts = [];

  	for (key in primes) {
  		
      const prime = parseInt(key);

      let power = 1,
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