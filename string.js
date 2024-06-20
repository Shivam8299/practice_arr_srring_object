/* Problem Statement:
You are given a string S consisting of lowercase English letters. Your task is to calculate the frequencies of each character in the string and then perform the following operations:
1. Find the character that occurs the most frequently.
2. Replace all occurrences of this character in the string with the character that occurs the least frequently.
3. Output the modified string.
If there are multiple characters with the same maximum frequency or multiple characters with the same minimum frequency, choose the character with the smallest ASCII value.

Input:
The input consists of a single line containing a string S of length N
Output:
Print the modified string after performing the above operations.
Constraints:
S consists of lowercase English letters only.
Example:
Input:
abcbabaa
Output:
cbcbcbcc
Explanation:
The frequencies of each character are:
  - 'a': 4 times
  - 'b': 3 times
  - 'c': 1 time

 */

const input = require("prompt-sync")();
let str = input("enter your str:-");

let min = Infinity;
let max = 0;
let high;
let low;
for (let i = 0; i < str.length; i++) {
  let count = 1;
  for (let j = 0; j < str.length; j++) {
    if (str[i] == str[j]) {
      count += 1;
    }
  }
  if (count > max) {
    max = count;
    high = str[i];
  }
}

for (let i = 0; i < str.length; i++) {
  let count = 1;
  for (let j = 0; j < str.length; j++) {
    if (str[i] == str[j]) {
      count += 1;
    }
  }
  if (count < min) {
    min = count;
    low = str[i];
  }
}
let newstr = str.replaceAll(high, low);
console.log(newstr);


