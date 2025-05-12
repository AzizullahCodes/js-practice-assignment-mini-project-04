// // ______________ small-project- 01(simple calculator -addition)______________
//  var value1 = prompt("Enter the first number:");
//  var value2 = prompt("Enter the second number:");
// // convert the inputs to numbers
//  var num1 = +(value1);
//  var num2 = +(value2);
// // perform a calculation addition here
//  var sum = num1 + num2;
// // show the result
//  alert("The sum is: " + sum);
// // ________________ small-project- 01(simple calculator -multiplication)___________
//   var number1 = prompt('Enter first number');
//   var number2 = prompt('Enter second number');
// //   the values that we take from user will come in form 
// // string first we convert the values from string to number 
//  var num1 = +(number1);
//  var num2 = +(number2);
// // now we multiplication operation start 
//  var total = num1 * num2;
//  alert("The multiplication of first and second number is: " + total);
// // ________________________ small-project- 03(calculator for a rectangle)______________________
//  var width = prompt('Enter the width of rectangle');
//  var height = prompt('Enter the height of rectangle');
// // as we receive the height and width in string than first we 
// // convert string to number 
//  var widthInNumbers = +(width);
//  var heightInNumbers = +(height);
// // first we calculate area
//  var area = widthInNumbers * heightInNumbers;
//  alert("The area is: " + area); 
// // now we calculate perimeter 
//  var perimeter = 2 * (widthInNumbers + heightInNumbers);
//  alert("The perimeter is: " + perimeter);

// // ________________________ small-project- 04(calculator for a rectangle)______________________

//  var firstNumber = prompt('Enter first number');
//  var secondNumber = prompt('Enter second number');
// // first we convert strings into numbers
//  var num1 = +(firstNumber);
//  var num2 = +(secondNumber);
// // first we apply addition operation
//  var addition = num1 + num2;
//  alert("The addition of two numbers is :" + addition);
// // now we apply subtraction operation 
//  var subtraction = num1 - num2;
// alert('The subtraction among two numbers is: ' + subtraction);
// // now we apply multiplication operation 
//  var multiplication = num1 * num2;
// alert("The multiplication of two numbers is: " + multiplication);
// // now we apply division operation 
//  var division = num1 / num2;
//  alert("The divison of numbers is: " + division);

// // ________________________ small-project- 05(Square & cube calculator)______________________
//   var number = prompt('Enter a number');
//   var num = +(number);
//   var square = num * num;
//   alert("The square of the number is: " + square);
//    var cube = num * num * num;
//    alert('The cube of the number is:' + cube);
//   // ________________________ small-project- 06(calculator for a rectangle)______________________
//   var length = prompt('Enter the length');
//   var width  = prompt('Enter width');
//    var num1 = +(length);
//    var num2 = +(width);
   
//    var area = num1 * num2;
//    var perimeter = 2 * (num1 + num2);
//    alert("The area of rectangle is: " + area);
//   alert("The perimeter of rectangle is: " + perimeter);
// // ________________________ small-project- 07(Temperature converter)______________________
//  var enterTemperature = prompt('enter temperature');
//  var num = +(enterTemperature);
//  var farenheit = (num * 9/5) + 32;
//  alert('The temperature in Fehrenheit: ' + farenheit);
// // ________________________ small-project- 08(simple calculator)______________________ 
//   var number2 = prompt('Enter second number');
// //   first we convert string to number 
//  var num1 = +(number1);
//  var number1 = prompt('Enter first number');
//   var num2 = +(number2);
//  // now we apply / operation 
//  var result = num1 / num2;
// console.log("The result is: " + result);

// // // ________________________ small-project- 09(Simple Math operation)______________________ 
//  var number1 = prompt('Enter first number');
// var number2 = prompt('Enter second number');
//    //  now we change string to number 
//    var num1 = +(number1);
//   var num2 = + (number2);
// // //  Now we we perform subtraction operation 
//  var result = num1 - num2 ;
//  console.log("The user's required result is: "  + result);
// // ________________________ small-project- 10(Modulus operator / Remainder)______________________ 
//  var enter1stNumber = prompt('Enter 1st number');
//  var enter2ndNumber = prompt('Enter 2nd number'); 
// // // we convert string to number 
//  var num1 = +(enter1stNumber); 
//  var num2 = +(enter2ndNumber); 
// // // now we perform remainder operation 
//  var remainder = num1 % num2 ;
//  alert('The remainder is: ' + remainder); 
// // ________________________ small-project-11(Square a number)______________________ 
//  var number = prompt('Enter number'); 
// //   // ========== change string to number 
//  var newNumber = +(number);
// var square = newNumber * newNumber; 
// alert("The square of " + newNumber + " is : " + square);
//  // ________________________ small-project- 12(Area of rectangel )______________________ 
//  var length = prompt("Enter length of square");
//  var width  = prompt("Enter width of rectangle");
// // //  =========== string to number 
//  var newLength = +(length);
//  var newWidth  = +(width);
//  var area = newLength * newWidth ;
//  alert("The area of Rectangle is: " + area); 
// // ________________________ small-project- 13(Average of three numbers)______________________ 
//  var number_1 = prompt('Enter first number');
//   var number_2 = prompt('Enter second number');
//  var number_3 = prompt('Enter third number');
// // //******* first we convert string to nubmers 
//   var num1 = +(number_1);
//   var num2 = +(number_2);
//   var num3 = +(number_3); 
//   var average = ((num1 + num2 + num3) / 3);
//   alert("The average of three numbers is: " + average); 
// // ________________________ small-project- 14(Average of three numbers)______________________ 
//  var number1 = prompt('Enter base number'); 
//  var number2 = prompt('Enter exponent');
// // // &&&&&&&&&& first we convert string to number 
//  var baseNumber = +(number1);
// var exponent   = +(number2);
// var result = Math.pow(baseNumber, exponent);
//  alert("The result is: " + result); 
//  // ________________________ small-project- 15(Replace first letter with last(in 3-letter word))______________________ 
// var word = prompt('Enter three letter any word');
// alert('The our word before operation is = ' + word);
// // first we change the words into pieces 
// var a = word[0];
// var b = word[1];
// var c = word[2];
// var replaced = c + b + c;
// alert('The words is after our required operation = ' + replaced);


 

// // ________________________ small-project- 16(Calculate simple interest)______________________ 
//  var principal = prompt('Enter principal');
// var Rate      = prompt('Enter rate');
//  var  Time     = prompt('Enter time'); 
// // //  ====== first string to number 
// var principal_p = +(principal); 
//  var rate_R      = +(Rate);
// var time_T      = +(Time); 
// var interest    = (principal_p * rate_R * time_T) / 100;
//  alert('The Interest is: ' + interest);
// // ________________________ small-project- 17(swap to numbers)______________________ 
//  var a = prompt('Enter the first  number (a)');
//  var b = prompt('Enter the second number (b)');
//  alert("Before swapping :\na = " + a + "\nb = " + b);
// // // ======== swap using a temporary variable 
// let temp = a;
// a = b;
// b = temp;
// // // ===== show after swapping 
//  alert("After swapping: \na = " + a + "\nb = " + b); 
// // // 
// // ________________________ small-project- 18(swap to numbers)______________________ 
//  var x = prompt('Enter first number');
//  var y = prompt('Enter second number');
//  alert("Before swapping the value of x = " + x + "\n" + " Before swapping the value of y = " + y);
//  var temporaryVariable = x;
//  x = y;
//  y = temporaryVariable;
// alert('After swapping the value of x = ' + x + '\n' + 'The value of y = ' + y);
// // ________________________ small-project- 18(swap two words)______________________ 
//  var firstWord = prompt('Enter first word');
//  var secondWord = prompt('Enter second word');
//   alert('The first word before swapping = ' + firstWord + '\n' + 'The second word before swapping = ' + secondWord);
//   var temporaryVariable = firstWord;
//   firstWord = secondWord;
//   secondWord = temporaryVariable;
//   alert('The first word after swapping = ' + firstWord + '\n' + 'The second word after swapping = '+ secondWord);
// // ________________________ small-project- 19(swap to numbers)______________________ 
//  var enter1stNumber = prompt('Enter first number');
//  var enter2ndNumber = prompt('Enter second number');
//  var enter3rdNumber = prompt('Enter third number');
// // // show before swapping
//  alert('The first no before swappin = '+ enter1stNumber + '\n' + 'The second no before swapping = ' + enter2ndNumber + '\n' + 'The third no before swapping = ' + enter3rdNumber);

//  var temporaryVariable = enter1stNumber;
//  enter1stNumber = enter2ndNumber;
//  enter2ndNumber = enter3rdNumber;
//  enter3rdNumber  = temporaryVariable;
//  alert('The first no after swapping = ' + enter1stNumber + '\n' + 'The second no after swapping = ' + enter2ndNumber + '\n' + 'The third no after swapping = ' + enter3rdNumber);
// // ________________________ small-project- 20(swap two numbers without temp variable)______________________ 
//           var num1 = +prompt('Enter first no');
//            var num2 = +prompt('Enter second no');
//            var a = num1 + num2;
//            alert(a);
//           var b = num1 - num2;
//            alert(b);
//            var a = num1 - num2 ;
//            alert(a);
//           // ________________________ small-project- 21(swap First  & Last Letters of a 3 Lettrs word)______________________ 
//                    var word = prompt('Enter three letter word like(cat)');
//                    var first_Letter = word[0];
//                    var middle_Letter = word[1];
//                    var last_Letter   = word[2];
//                    var swapped = last_Letter + middle_Letter + first_Letter;
//                    alert(swapped); 
                  
//                   //  ________________________ small-project- 22(Extract Middle Letter of a 3-Letter word)______________________ 
//          var word = prompt('Enter three letter word like (dog)');
//          alert('The word is before extraction = ' + word);
//          var a = word[0];
//          var b = word[1];
//          var c = word[2];
//          alert('The word is after extraction = ' + b);

       //  ________________________ small-project- 23(Extract Middle Letter of a 6-Letter word)______________________
      //  var word = prompt('Enter word of 6-letters like(fellow)');
        //  we will extract its 5 no letter
        // first we show our word before operation 
        // var a = word[0];
        // var b = word[1];
        // var c = word[2];
        // var d = word[3];
        // var e = word[4];
        // var f = word[5];
        // alert('The five no in word is = ' + e);
        
        //  ________________________ small-project- 24(reverse letter arrangement)______________________
//         var word = prompt('Enter word consist of 5 letter like (Fahad)');
//           //  first we show our word in alert before operation 
//           alert('The user has give me word = ' + word);
//           // now we reverse word 
//           var a = word[0];
//            var b = word[1];
//             var c = word[2];
//              var d = word[3];
//               var e = word[4];
// //  now we reverse ;
// var new_word = e+d+c+b+a;
// alert('The reversed word is = ' + new_word);
  //  ________________________ small-project- 24(Extract Middle Letter of a 3-Letter word)______________________
