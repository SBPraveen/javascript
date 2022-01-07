/*
!This is an exercise
Soooo what is a polyfill ??
    A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it
*/
/*
*Question : 
    ! Polyfill for `Object.is(..)` by overcoming the 2 drawbacks NaN and -0

In this exercise, you will define a polyfill for `Object.is(..)`. No cheating and looking it up online!

## Instructions

1. `Object.is(..)` should take two parameters.

2. It should return `true` if the passed in parameters are exactly the same value (not just `===` -- see below!), or `false` otherwise.

3. For `NaN` testing, you can use `Number.isNaN(..)`, but first see if you can find a way to test without usage of any utility?

4. For `-0` testing, no built-in utility exists, but here's a hint: `-Infinity`.

5. If the parameters are any other values, just test them for strict equality.

6. You cannot use the built-in `Object.is(..)` -- that's cheating!

## Polyfill Pattern

**NOTE:** Since your JS environment probably already has `Object.is(..)`, to test your polyfill you'll have to first unconditionally define it (no `if` guard), and then add the `if` guard when you're done.

To define a polyfill, it looks like this:

```js
if (!Object.is) {
	Object.is = function ObjectIs(..) { .. };
}
```
*/
// TODO: define polyfill for `Object.is(..)`
//since in the current js Object.is is already included I'm adding "true" to the condition but in the real case senario don't add true to the if condition
if (!Object.is || true) {
	Object.is = function ObjectIs(a,b) {
        if(!Number.isNaN(a) && (1/a) !== -Infinity && !Number.isNaN(b) && (1/b) !== -Infinity)
            return a === b
        else if ((1/a) === -Infinity && (1/b) === -Infinity)
            return true
        else if(Number.isNaN(a) && Number.isNaN(b))
            return true
        return false
    };
}



// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);
//=========================================================================

//|| kyle simpson's answer

if (!Object.is /*|| true*/) {
	Object.is = function ObjectIs(x,y) {
		var xNegZero = isItNegZero(x);
		var yNegZero = isItNegZero(y);

		if (xNegZero || yNegZero) {
			return xNegZero && yNegZero;
		}
		else if (isItNaN(x) && isItNaN(y)) {
			return true;
		}
		else if (x === y) {
			return true;
		}

		return false;

		// **********

		function isItNegZero(x) {
			return x === 0 && (1 / x) === -Infinity;
		}

		function isItNaN(x) {
			return x !== x;
		}
	};
}