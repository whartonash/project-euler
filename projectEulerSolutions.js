/*
 * Problem 1 - Multiples of 3 and 5
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we 
 * get 3, 5, 6 and 9. The sum of these multiples is 23. 
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

function solveProblem1() {

	var num, multiples = [];

	for (var num = 1; num < 1000; num++) {
		if (num % 3 == 0 || num % 5 == 0) {
			multiples.push(num);
		}
	}

	return multiples.reduce(function (sum, val) { return sum += val; }, 0);
}


/*
 * Problem 2 - Even Fibonacci numbers
 * 
 * Each new term in the Fibonacci sequence is generated by adding the previous 
 * two terms. By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 
 * 8, 13, 21, 34, 55, 89, ...
 * 
 * By considering the terms in the Fibonacci sequence whose values do not exceed
 * four million, find the sum of the even-valued terms.
 */

function solveProblem2() {

	// Generate Fibonacci terms whose value do not exceed four million 
	var sum = 0, fibArray = [1, 2], nextFibElem = 3;
	
	do {
		fibArray = addNextFibonacciElem(fibArray);
		nextFibElem = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
	}
	while (nextFibElem < 4000000);


	// Sum the even valued terms - utilising the observed odd-even pattern of 
	// the Fibonacci sequence (OEOOEOOEOOE...), 
	for (var i = 1; i < fibArray.length; i += 3) {
		sum += fibArray[i];
	}

	return sum;
}