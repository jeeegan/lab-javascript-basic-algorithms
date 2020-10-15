// Iteration 1: Names and Input
let hacker1 = "David";
console.log(`"The driver's name is ${hacker1}"`);
let hacker2 = "David";
console.log(`"The navigator's name is ${hacker2}"`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}
// Iteration 3: Loops
for(let i=0; i<hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase());
}
let reverseName = "";
for(let i=hacker2.length-1; i>=0; i--) {
  reverseName += hacker2[i];
}
console.log("With loop: ", reverseName);
console.log('With string method: ', hacker2.split('').reverse().join(''));
if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}
// Bonus 1
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan magna augue. Ut risus erat, tempus quis egestas ut, dignissim ut justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus enim ligula, interdum vel nunc sed, mollis auctor risus. Nam tempus ipsum nunc, id feugiat nunc maximus sit amet. Vestibulum hendrerit felis nisl, vitae tempus mauris placerat a. Suspendisse ac sem a est tincidunt aliquet. Vivamus sollicitudin vulputate sagittis. Vestibulum rutrum blandit tincidunt. Donec in dictum erat. In ac nibh tortor. Donec sollicitudin egestas egestas.

Ut leo dolor, venenatis commodo viverra ac, bibendum tristique nisi. Nulla nec iaculis erat. Nam accumsan ex hendrerit, venenatis erat ut, scelerisque leo. Aliquam erat volutpat. Proin sollicitudin commodo nibh ac lobortis. Nulla et metus nisl. Nulla nec neque eu ligula posuere fermentum et vitae dui. Sed dictum sem eu sapien tincidunt, et cursus nisi suscipit.

Ut molestie id orci at porta. Donec ultricies at leo quis consequat. Etiam non pulvinar arcu. Duis nunc enim, vestibulum in semper eget, porttitor non urna. Morbi laoreet urna at lectus ultrices viverra. Quisque euismod semper ligula. Sed sagittis enim ante, id luctus lorem finibus id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Maecenas eleifend eget nisl sed tincidunt. Nullam mattis sapien non convallis blandit. Quisque elementum quis lectus sed egestas. Nunc sit amet rutrum ligula. Etiam in vestibulum ligula. Aliquam posuere lobortis pharetra. Praesent viverra neque justo, ut feugiat erat tempus non.`;
let loremIpsumArr = loremIpsum.split(' ')
console.log("Total number of words is: ", loremIpsumArr.length);
let etCounter = 0;
for (let i=0; i<loremIpsumArr.length; i++) {
  if (loremIpsumArr[i] === "et") {
    etCounter ++;
  }
}
console.log("Total instances of et: ", etCounter);
// Bonus 2
let phraseToCheck = "\"No 'x' in Nixon";
let normalisedPhrase = "";
let reversedPhrase = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i].match(/[a-zA-Z]/)) {
    normalisedPhrase += phraseToCheck[i].toLowerCase();
  }
}
for (let i = phraseToCheck.length - 1 ; i >= 0; i--) {
  if (phraseToCheck[i].match(/[a-zA-Z]/)) {
    reversedPhrase += phraseToCheck[i].toLowerCase();
  }
}
if (reversedPhrase === normalisedPhrase) {
  console.log("Palindrome!")
} else {
  console.log("Not a Palindrome!")
}