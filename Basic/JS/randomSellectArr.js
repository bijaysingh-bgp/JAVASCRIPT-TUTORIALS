var animals = ["fish", "chikan", "dog", "cat", "horse", "rabbit"];

var randomIndex = Math.floor(Math.random() * animals.length) + 1;
console.log(" Index value is ", +randomIndex);
var randomAnimal = animals[randomIndex];

var message = prompt("which index value is  " + randomAnimal); // sellect the index for animals

response = (message == randomIndex) ? "Correct " : " guessed value was wrong and it was " + randomIndex;
alert(response); // check the entered index value usig tarnary Operator 

console.log(response);