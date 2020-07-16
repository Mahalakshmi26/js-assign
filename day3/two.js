//string functions
let text="the javascript string functions with the examples ";
console.log(text);

//search()-searches a string for a specified value
console.log(text.search("with"));

//slice()-extracts a aprt of a string and returns the extracted part in a new string

let name="xxx ,yyy ,zzz";
//console.log(name.slice(3,9));
console.log(name.slice(-10,-5));

//substring() as well as slice() are same but it wont accept negative values
console.log(name.substring(5,13));

//substr() and slice() are same but the difference is that the second parameter defines the length of the extracted part
console.log(name.substr(4));

//replace()-it replace with new string
var text1="new string";
console.log(text1.replace("replaced string"));

//concat()-concatenate the two string
var a="hi";
var b="helo";
console.log(a.concat("",b));

//trim()-removes space from the both sides of the string
var c="     hello    ";
console.log(c.trim());

//cahrCodeAt()-returns unicode of the character at a specified index in a string
console.log(b.charCodeAt(3));