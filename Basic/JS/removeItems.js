var arry = [
    ["dog", "cat", "horse"], 5, [5, 4, 3, 2], "hello"
];
arry.sort(); // to sort the array

console.log(arry);

var q = prompt(" which items want to remove ?");

var finder = arry.indexOf(q);


console.log("index to remove is : " + arry[finder]);

var final = (finder > -1) ? arry.splice(finder, 1) : false; // remove by spice function as "finder" is start point

console.log("The Remove Items is : " + final); // display after remove the items are stored in final variable

console.log(arry);