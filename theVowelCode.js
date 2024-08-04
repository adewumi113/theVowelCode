https://www.codewars.com/kata/53697be005f803751e0015aa
/* 
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/
// Step 1: Create the encode function to replace lowercase vowels with numbers
function encode(text) {
    const vowelToNumber = { 'a': '1', 'e': '2', 'i': '3', 'o': '4', 'u': '5' };
    return text.split('').map(char => vowelToNumber[char] || char).join('');
}

// Step 2: Create the decode function to replace numbers back with vowels
function decode(text) {
    const numberToVowel = { '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u' };
    return text.split('').map(char => numberToVowel[char] || char).join('');
}
encodeVowel('hello') //h2ll4

//solution using for loop
function encode(str) {
    const vowelToNumber = { 'a': '1', 'e': '2', 'i': '3', 'o': '4', 'u': '5' };
    let encodedString = ''
    for (let i=0; i<str.length; i++){
        const char = str[i];
        encodedString += vowelToNumber[char] || char
    }
    return encodedString
}

function decode(str) {
    const numberToVowel = { '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u' };
    let decodedString = ''
    for (let i=0; i<str.length; i++){
        const char = str[i];
        decodedString += numberToVowel[char] || char
    }
    return decodedString
}

//solution using forEach
function encode(str) {
    const vowelToNumber = { 'a': '1', 'e': '2', 'i': '3', 'o': '4', 'u': '5' };
    let encodedString = ''
    str.split('').forEach(char => {
    encodedString += vowelToNumber[char] || char
    })
    return encodedString
}

function decode (str) {
    const numberToVowel = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'}
    let decodedString = ''
    str.split('').forEach(char => {
        decodedString += numberToVowel[char] || char
    })
    return decodedString
}

//solution using charAt and indexOf
function encode(string){
    return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
  }
  
  //turn numbers back into vowels
  function decode(string){
    return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
  }