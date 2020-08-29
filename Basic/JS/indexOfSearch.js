var search = ["bijay", "sanjay", "ajay", "shreeya", "sandhya", "roshishna"];

var q = prompt("What you are looking for ? ");
var p = search.indexOf(q); // Search Inputed items and store in "p" throuch indexOf Function

var message = p > -1 ? "found" : "not found "; // check the searched items are greater than of -1 via tinary operator

console.log(message);
alert(message);