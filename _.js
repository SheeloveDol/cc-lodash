const _ = {

  clamp(number, lower, upper) {
    var lowerClampedValue = Math.max(number, lower);
    var clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    } 
    let isInRange = start <= number && number < end 
    return isInRange;
  },

  words(string) {
    let words = string.split(' ');
    return words;
  },

  pad(string, length) {
    if (string.length >= length) {
      return string;
    }
    let padStart = Math.floor((length - string.length) / 2);
    let padEnd = length - (string.length + padStart);
    let paddedString = ' '.repeat(padStart) + string + ' '.repeat(padEnd);
    return paddedString;
  },

  has(obj, key) {
    let hasValue = obj[key] === undefined ? false : true;
    return hasValue;
  },

}




// Do not write or modify code below this line.
module.exports = _;