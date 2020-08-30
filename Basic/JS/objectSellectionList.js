//var courses = {name:"bijay",roll:1,course:"MScIT",spefic:"javaScript Programming"}; // Literal declaration of object 

var courses = new Object(); // object construction 
courses.name = "bijay";
courses.roll = 1;
courses.course = "MScIT";
courses.spefic = " Javascript Programming";

console.log(courses);

q = prompt(" What do you want to Know about the courses ?");
console.log("You are looking for " + q + " are " + courses[q] + " of this coures");

/* Below For Loop will fetch the Property of Courses Object and display the Items value and as well as property  */
for (var x in courses) {
    console.log("property of courses : " + x); // display the property of object 
    console.log(" Items value : " + courses[x]); // display the value of items 
    console.log(x + "  " + courses[x]); // display property and value of object together 
}