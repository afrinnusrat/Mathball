/* Number Checkers */
const armstrong = require('./armstrong'),
	automorphic = require('./automorphic'),
	harshad = require('./harshad'),
	kaprekar = require('./kaprekar'),
	lucky = require('./lucky'),
	neon = require('./neon'),
	palindrome = require('./palindrome'),
	perfect = require('./perfect'),
	prime = require('./prime'),
	smith = require('./smith'),
	isDeficient = require('./isDeficient'),
	isFrugal = require('./isFrugal'),
	isStormer = require('./isStormer'),
	carmichael = require('./carmichael'),
	{ isHoax } = require('./isHoax'),
	check = require('./check');

/* Find nth Number */
const bell = require('./bell'),
	catalan = require('./catalan'),
	find = require('./find'),
	fibonacci = require('./fibonacci'),
	magic = require('./magic'),
	nCr = require('./nCr'),
	padovan = require('./padovan'),
	smart = require('./smart'),
	triangular = require('./triangular'),
	range = require('./range'),
	{ ugly } = require('./ugly');

/* Mathematical Utilities */
const avg = require('./avg'),
    count = require('./count'),
    frequency = require('./frequency'),	
    gcd = require('./gcd'),
	isEven = require('./isEven'),
	isOdd = require('./isOdd'),
	lcm = require('./lcm'),
	length = require('./length'),
	max = require('./max'),
	median = require('./median'),
	min = require('./min'),
	modInv = require('./modInv'),
	matrixMultiply = require('./matrixMultiply'),
	matrixChain = require('./matrixChain'),
	matrixExpo = require('./matrixExponentiation'),
	pow = require('./pow'),
	sort = require('./sort'),
	sum = require('./sum'),
	toDegrees = require('./degree'),
	toRadians = require('./radian'),
	Complex = require('./complex'),
	permutation=require('./permutation'),
	findPrimeFactors = require('./primefactor'),
	totient = require('./totient');

/* Helper Methods */
const performance = require('./performance'),
	pipe = require('./pipe');

/* Data Structure */
const PriorityQueue = require('./PriorityQueue'),
	Stack = require('./stack'),
	Graph = require('./graph');

/* M - Mathball Object */
module.exports = {
	isArmstrong: armstrong.isArmstrong,
	isAutomorphic: automorphic.isAutomorphic,
	bell: bell.bell,
	catalan: catalan.catalan,
	find,
	fibonacci: fibonacci.fibonacci,
	padovan: padovan.padovan,
	permutation:permutation.permutation,
	findPrimeFactors: findPrimeFactors.findPrimeFactors,
	gcd,
	isHarshad: harshad.isHarshad,
	isEven,
	isOdd,
	isKaprekar: kaprekar.isKaprekar,
	lcm,
	length,
	isLucky: lucky.isLucky,
	magic: magic.magic,
	matrixMultiply,
	matrixChain: matrixChain.matrixChain,
	matrixExpo: matrixExpo.matrixExpo,
	max,
	median,
	min,
	nCr,
	isNeon: neon.isNeon,
	isPalindrome: palindrome.isPalindrome,
	rangePalindrome:palindrome.rangePalindrome,
	isPerfect: perfect.isPerfect,
	isFrugal: isFrugal.isFrugal,
	performance,
	pipe,
	pow,
	phi: totient.phi,
	isStormer: isStormer.isStormer,
	rangePrime: prime.rangePrime,
	smart: smart.smart,
	isSmith: smith.isSmith,
	sort,
	sum,
	avg,
	toDegrees: toDegrees.toDegrees,
	toRadians: toRadians.toRadians,
	modInv: modInv.modInv,
	frequency,
	count,
	isDeficient,
	PriorityQueue,
	Stack,
	Graph,
	isCarmichael: carmichael.isCarmichael,
	range,
	Complex,
	isHoax,
	ugly,
	triangular: triangular.triangular,
	check
};
