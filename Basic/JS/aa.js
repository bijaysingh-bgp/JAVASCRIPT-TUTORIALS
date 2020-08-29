do {
    var question1 = prompt("which task want to do 1-4 ?", " Please Enter 1-4");

    if (
        !(question1 == 8 || question1 == 46) &&
        (question1 < 48 || question1 > 57)
    ) {
        while (question1 == 0 || question1 > 4) {
            // check condition to enter valid value

            alert(" Please Enter Value Between 1 to 4 ");
            question1 = prompt("which task want to do 1-4 ?");
        }
    }
    console.log(" Entered value are correct : " + question1);
    var letters = /^[A-Za-z]+$/;
    var question2 = question1.match(letters);
    // console.log("question 2 " + question2);
    /*else {
      console.log("first output" + question1);

      var letters = /^[A-Za-z]+$/;
      var question2 = question1.match(letters);
      console.log("question 2 " + question2);

      if (question2) {
        console.log(" Question 1  " + question1);
        var question1 = prompt(
          "which task want to do 1-4 ?",
          " Please Enter 1-4"
        );
        while (question1 == 0 || question1 > 4) {
          // check condition to enter valid value

          alert(" Please Enter Value Between 1 to 4 ");
          question1 = prompt("which task want to do 1-4 ?");
        }
      }
    } */
} while (question2);
/*function allLetter(inputtxt)
      { 
        //var letters = /^[0-9a-zA-Z ]+$/;
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      alert('Your name have accepted : you can try another');
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      }
      } */

/*var firstLetter = name.charAt(0).toUpperCase();
if( firstLetter.toLowerCase() != firstLetter) {
    // it's a letter
}
else {
    // it's a symbol
}   */