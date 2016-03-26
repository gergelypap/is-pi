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
  if ([
    3.14,
    3.141,
    3.1415,
    3.14159,
    3.141592,
    3.1415926,
    3.14159265,
    3.141592653,
    3.1415926535,
    3.14159265358,
    3.141592653589,
    3.1415926535897,
    3.14159265358979,
    'PI',
    'pi',
    'Pi',
    'π',
    'Π',
  ].contains(x)) return true
  else return Math.PI === +parseFloat(x).toFixed(15)
}
