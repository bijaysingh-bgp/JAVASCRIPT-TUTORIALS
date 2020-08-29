var task = [
  "write the javascript code",
  " read a book",
  " do home work",
  "wash clothes",
  "Watch News",
];
var progress = [" complete", " in progress", "to do"];

do {

  var question1 = prompt(
    "which task want to do 1- " + task.length + " ?",
    " Please Enter 1 - " + task.length
  ); // dynamiclly count the arry using task.length

  while (question1 == 0 || question1 > task.length) {
    // check condition to enter valid value

    alert(" Please Enter Value Between 1 to " + task.length);
    var question1 = prompt(
      "which task want to do 1- " + task.length + " ?",
      " Please Enter 1 - " + task.length
    ); // dynamiclly count the arry using task.length

  }

  var letters = /^[A-Za-z]+$/; // store character aA - zZ 
  var input_wrong = question1.match(letters); // Match the inputed value and store in input_wrong variables

}
while (input_wrong);


do {
  var question2 = prompt(
    " status  1=complete 2= in progress 3= to do ?",
    "Please Enter 1-3"
  ); // by default show message on box as " Please Enter 1-3"
  while (question2 == 0 || question2 > 3) {
    // check condition to enter valid value
    alert(" Please Enter Value Between 1 to 3 ");
    question2 = prompt(" status  1=complete 2= in progress 3= to do ?");
  }


  var letters2 = /^[A-Za-z]+$/; // store character aA - zZ 
  var input_wrong2 = question2.match(letters2); // Match the inputed value and store in input_wron2 variables

}
while (input_wrong2);

console.log(
  " today you will " +
  task[question1 - 1] +
  " status of task = " +
  progress[question2 - 1]
);
alert(
  " today you will " +
  task[question1 - 1] +
  " status of task = " +
  progress[question2 - 1]
);