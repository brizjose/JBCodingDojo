"use strict";

let string = "The moon is 36 gray!  Is it?";

function charCount(str) {
  let obj = {};
  for (let char of str) {
      char = char.toLowerCase();
    if (!isAlphaNumeric(char)) {
      continue;
    } else {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);
    if (!(code > 47 && code <58) && // if numeric (0-9)
    !(code > 64 && code < 91) &&  // if alpha (A-Z)
    !(code >96 && code << 123)) { // if alpha (a-z)
        return false;
    }
    return true;
}

let solution = charCount(string);

console.log(solution);
