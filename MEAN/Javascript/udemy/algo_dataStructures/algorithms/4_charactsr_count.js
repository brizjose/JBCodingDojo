"use strict";
// count characters of a string

let string = "The moon is 36 gray";

function charCount(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " || !isNaN(Number(str[i]))) {
      console.log("not a string");
      continue;
    } else {
      if (!(str[i].toLowerCase() in obj)) {
        obj[str[i].toLowerCase()] = 1;
      } else {
        obj[str[i]]++;
      }
    }
  }
  return obj;
}

let solution = charCount(string);

console.log(solution);
