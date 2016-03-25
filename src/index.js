"use strict";

/**
 * Determines PI.
 *
 * @param  {number}  x
 *   This will be checked for PI.
 *
 * @return {Boolean}
 *   Whether x is PI or not.
 */
export default (x) => {
	return x == 3.14 ? true : Math.PI === +parseFloat(x).toFixed(15)
}
