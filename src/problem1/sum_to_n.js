//using summation formula -> O(1) time complexity
var sum_to_n_a = function (n) {
	return (n * (1 + n)) / 2;
};

//iterative method -> O(n) time complexity
var sum_to_n_b = function (n) {
	let sum = 0;
	for (let i = 1; i < n + 1; i++) {
		sum += i;
	}
	return sum;
};

//recursive method -> O(n) time complexity
var sum_to_n_c = function (n) {
	if (n == 0) {
		return 0;
	}
	return n + sum_to_n_c(n - 1);
};

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));
