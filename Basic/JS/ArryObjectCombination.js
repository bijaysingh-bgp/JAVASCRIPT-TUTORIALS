var bijay = {
    age: 48,
    heigh: "5'.7'",
    color: "wheat ",
    hair: "black"
}; // define object 

family = {
    family1: bijay,
    family2: {
        age: 40,
        color: "White"
    }
} // define object within object and "family1" object derieve from object " bijay"

family3 = [bijay, {
    age: 30,
    hair: "brown"
}]; // define array and object but object reference from other object 

console.log(family.family1.age); // display items from "bijay" object through famil.family1 
console.log(family.family2.age);